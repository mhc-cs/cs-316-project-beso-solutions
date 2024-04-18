import { NextResponse } from 'next/server';
import axios from 'axios';
const mongoose = require('mongoose');
var ProductModel = require('../db');
mongoose.connect('mongodb://localhost:27017/maindb', { useNewUrlParser: true});
const express = require('express');
const cors = require('cors');
const app = express();

// export async function POST(req: Request){
//   const { token } = req.body;
//   try {
//     const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,{},{headers: { "Content-Type": "application/x-www-form-urlencoded; charset=utf-8" }});
//     if (response.data.success) {
//       return NextResponse.json({ message: 'reCAPTCHA verification successful' })
//     } else {
//       return NextResponse.json({ message: 'reCAPTCHA verification failed' })
//     }
//   } catch (err) {
//     return NextResponse.json({ message: 'Internal server error' })
//   }
// }

export async function POST(req: Request){
      const response = await axios.post('/api/upload', async(req, res) => {
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
    
        await productDoc.save().then(result => {
            res.status(201).json({
                message: "Product Added successfully!"
            })
        }).catch(err => {
            console.log(err),
                res.status(500).json({
                    error: err
                });
        })
      });
      return NextResponse.json({ message: "Hello from Next.js"});
    }