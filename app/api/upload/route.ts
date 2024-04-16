import {ProductModel} from '../db';

let express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router();

router.post('/api/products', (req, res) => {
    const productDoc = new ProductModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description, //client description of their product
        category: req.body.categoryv,//shirt, t shirt, 
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
    productDoc.save().then(result => {
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