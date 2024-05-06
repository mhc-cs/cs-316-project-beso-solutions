const mongoose = require('mongoose');
import {ProductModel} from '../db';

export async function POST(req: Request) {
    const data = await req.json();
    const exists = await ProductModel.find(
        {name: data.name}
    );
    console.log(exists.length)
    if (exists.length == 0){ //brand new product
        const productDoc = new ProductModel({
            _id: new mongoose.Types.ObjectId(),
            name: data.name,
            description: data.description, //client description of their product
            category: data.category,//shirt, t shirt, 
            material: data.material, //jean, cotton, ect
            colors:[
                {
                    color: data.color, //dark wash/ medium wash
                    image: "placeholder",
                    sizes:[{
                        size: data.size,
                        inseams:[{
                            inseam: data.inseam,
                            price: data.price,
                            stock: data.stock,
                        }]
                    }]
                }
            ],  
            });
            console.log(productDoc)
            try{
                await productDoc.save();
            }catch (error) {
                console.log("`Webhook error: ${error.message}")
                return new Response(`Webhook error: ${error.message}`, {
                  status: 400,
                })
              }
              console.log("HAPPY")
        
              console.log("Success!")
              return new Response('Success!', {
                status: 200,
              })
    } 
    if (data.color!=null){
        const exists = await ProductModel.find(
            {name: data.name, "colors.color" : data.color}
        );
        if (exists.length == 0){ //updating a new color
            await ProductModel.updateOne(
                {"name": data.name},
                { "$push": 
                    {"colors": 
                        {
                        "color": data.color,
                        "sizes":[{
                                "size": data.size,
                                "inseams": [{
                                    "ineseam": data.inseam,
                                    "price":data.prize, 
                                    "stock":data.stock
                                }]
                            }]
                        }
                    }
                }
            )
            console.log("Succesfully Inserted A New Color!")
            return new Response('Succesfully Inserted A New Color!', {
                status: 200,
            })
        }
    }
    if (data.size != null){
        const exists = await ProductModel.find(
            {name: data.name, "colors.color"  : data.color,  
            "colors.sizes.size": data.size}
        );
        if (exists.length == 0){ //New size
            await ProductModel.updateOne(
                {  "name": data.name, "colors.color": data.color },
                { "$push": 
                    {"colors.$.sizes": 
                        {
                            "size": data.size,
                            "inseams": [{
                                "ineseam": data.inseam,
                                "price":data.prize, 
                                "stock":data.stock
                            }]
                        }
                    }
                })
                console.log("Succesfully Inserted A New Size!")
            return new Response('Succesfully Inserted A New Size!', {
                status: 200,
            })
        }
    }
    if (data.inseam != null){
        const exists = await ProductModel.find(
            {name: data.name, 
            "colors.color"  : data.color,  
            "colors.sizes.size": data.size, 
            "colors.sizes.inseams.inseam":data.inseam }
        );
        if (exists.length == 0){ //New size
            await ProductModel.updateOne(
                {"name": data.name},
                {"$push": 
                    {"colors.$[j].sizes.$[i].inseams": 
                            {
                            "ineseam": data.inseam,
                            "price":data.prize, 
                            "stock":data.stock
                        }
                    }
                },
                { arrayFilters: [{"j.color": data.color},{ "i.size": data.size }] }
            )
            console.log("Succesfully Inserted A New Inseam!")
            return new Response('Succesfully Inserted A New Inseam!', {
                status: 200,
            })
        }else{ //simply updating stock (or price)
            if(data.stock!= null && data.stock != ''){
                const currStock = exists[0].colors[0].sizes[0].inseams[0].stock
                const newStock = currStock+data.stock
                await ProductModel.updateOne(
                    {"name": data.name, "colors.color": data.color,"colors.sizes.size": data.size},
                    { $inc: { "colors.$[k].sizes.$[i].inseams.$[j].stock": newStock }},
                  { arrayFilters: [{"k.color": data.color},{ "i.size": data.size },{"j.inseam": data.inseam}] }
                )
                console.log("Succesfully Updated Price!")
            }
            if(data.price != null && data.price != ''){
                await ProductModel.updateOne(
                    {"name": data.name, "colors.color": data.color,"colors.sizes.size": data.size},
                    {"colors.$[k].sizes.$[i].inseams.$[j].stock": data.price },
                  { arrayFilters: [{"k.color": data.color},{ "i.size": data.size },{"j.inseam": data.inseam}] }
                )
                console.log("Succesfully Updated Stock!")
            }

            console.log("Succesfully Updated Product!")
            return new Response('Succesfully Updated Product!', {
                status: 200,
            })
        }
    }


  }