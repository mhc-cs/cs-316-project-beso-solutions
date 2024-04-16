import {CartModel} from '../../db';

let express = require('express'),
    mongoose = require('mongoose'),
    router = express.Router();

router.post('/api/cart', (req, res) => {
    const doc = new CartModel(    {
        _id: new mongoose.Types.ObjectId(),
        userID: req.body.userID,
        paymentStatus: req.body.paymentStatus, //client description of their product
        orderStatus: req.body.orderStatus,//shirt, t shirt, 
        items:[{
                    name: req.body.itemName,
                    color: req.body.itemColor,
                    size: req.body.itemSize,
                    inseam: req.body.itemInseam,
                    quantity: req.body.itemQuantity,
                    price: req.body.itemPrice
                }]

            })
    doc.save();
  });