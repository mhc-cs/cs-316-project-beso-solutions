const mongoose = require('mongoose');
var ProductModel = require('../db');
mongoose.connect('mongodb://localhost:27017/maindb', { useNewUrlParser: true});

export async function POST(req: Request) {
    const data = await req.json();
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
    try{
        await productDoc.save();
    }catch (error) {
        return new Response(`Webhook error: ${error.message}`, {
          status: 400,
        })
      }
      console.log("HAPPY")

      return new Response('Success!', {
        status: 200,
      })
  }