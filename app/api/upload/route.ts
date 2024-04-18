import { MongoClient } from "mongodb";
import { NextResponse } from 'next/server';

const mongoose = require('mongoose');
var ProductModel = require('./db');
mongoose.connect('mongodb://localhost:27017/maindb', { useNewUrlParser: true});


export async function POST(req: Request) {
    const productDoc = new ProductModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description, //client description of their product
    category: req.body.category,//shirt, t shirt, 
    material: req.body.material, //jean, cotton, ect
    colors:[
        {
            color: req.body.color, //dark wash/ medium wash
            sizes:[{
                size: req.body.size,
                inseams:[{
                    image: "placeholder",
                    inseam: req.body.inseam,
                    price: req.body.price,
                    stock: req.body.stock,
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