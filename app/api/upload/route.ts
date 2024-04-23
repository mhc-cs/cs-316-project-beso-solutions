const mongoose = require('mongoose');
import {ProductModel} from '../db';

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
    console.log(productDoc)
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