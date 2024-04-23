const mongoose = require('mongoose');
var ProductModel = require('../db');
var CartModel = require('../db');
mongoose.connect('mongodb://localhost:27017/maindb', { useNewUrlParser: true});


export async function POST(req: Request) {
    const data = await req.json();
    const doc = new CartModel(    {
        _id: new mongoose.Types.ObjectId(),
        userID: data.userID,
        paymentStatus: data.paymentStatus, //client description of their product
        orderStatus: data.orderStatus,//shirt, t shirt, 
        items:[{
                    name: data.itemName,
                    color: data.itemColor,
                    size: data.itemSize,
                    inseam: data.itemInseam,
                    quantity: data.itemQuantity,
                    price: data.itemPrice
                }]

            })
    try{
        await doc.save();
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