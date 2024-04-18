import mongoose from 'mongoose';
import Image from "next/image";
import styles from "./page.module.css";
import { url } from "inspector";
import React, { createFactory, useEffect, useState } from 'react';
import Axios from 'axios';
import Link from 'next/link';
import MenuSize from '../components/MenuSize';
import MenuCategory from '../components/MenuCategory';
import MenuInseam from '../components/MenuInseam';
import MenuColor from '../components/MenuColor';
import Select from 'react-select'

// Connect to the database
mongoose.connect('mongodb://localhost:27017/maindb', { useNewUrlParser: true});
// const productCategories = ['shirt', 't-shirt', 'shorts', 'jeans']
const orderStatuses = ['not started','ordered', 'shipped', 'delivered', 'failed']
const paymentStatuses = ['not started', 'started','processed', 'failed']

const ImageSchema = new mongoose.Schema({ 
    img: { 
       data: Buffer, 
       contentType: String 
    }
 }
);

// Define the schema for the data
const ProductSchema = new mongoose.Schema({
        name: String,
        description: String, //client description of their product
        category: String,//shirt, t shirt, 
        material: String, //jean, cotton, ect
        colors:[
            {
                color: String, //dark wash/ medium wash
                image: [ImageSchema],
                sizes:[{
                    size: String,
                    inseams:[{
                        inseam: Number,
                        price: Number,
                        stock: {type: Number,
                                  validate: {
                                    validator: function (v) {
                                      return v >= 0;
                                    },
                                    message: (props) => `${props.value}: There isn't enough stock!`,
                                  },
                                  default: 0,
                            }
                    }]
                }]
            }
        ],
        
});


const CartSchema = new mongoose.Schema({
    userID: String,
    paymentStatus: { type: String, enum: paymentStatuses, default: 'not started'}, //client description of their product
    orderStatus: { type: String, enum: orderStatuses, default: 'not started'},//shirt, t shirt, 
    items:[{
                name: String,
                color: String,
                size: String,
                inseam: Number,
                quantity: {type: Number, required:[true, "Need Item Quantity"]},
                price: Number
            }]
});

// const Pants = new mongoose.Schema({
//     category: "Pants",//shirt, t shirt, 
//     name: String,
//     productType:  String, //ex: ['jean', 'long', 'short', 'cargo']
//     description: String, //client description of their product
//     material: String, //jean, cotton, ect
//     colors:[
//         {
//             color: String,
//             sizes:[{
//                 size: String,
//                 inseams:[{
//                     inseam: Number,
//                     price: Number,
//                     stock: Number,
//                 }]
//             }]
//         }
//     ],
    
// });


// Create a model.  This is what provides the nice API to
// manipulate the database.



export const ImageModel = mongoose.model ('images', ImageSchema);

export const ProductModel = mongoose.model ('products', ProductSchema);

export const CartModel = mongoose.model ('cart', CartSchema);

// Make the model and schema available
module.exports = ProductModel;
module.exports = ImageModel;
module.exports = CartModel;