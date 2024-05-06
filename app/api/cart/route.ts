const mongoose = require('mongoose');
import {CartModel} from '../db';

export async function POST(req: Request) {
    const data = await req.json();
    console.log("IN CART")
    console.log(data)
    const exists = await CartModel.find(
        {userID: data.userID}
    );
    if (exists.length == 0){ //brand new cart
        console.log("NEW CART")
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
            console.log(error)
            return new Response(`Webhook error: ${error.message}`, {
                status: 400,
            })
            }
            console.log("HAPPY")
    
            return new Response('Success!', {
            status: 200,
            })
    }else{ //update cart
        console.log("UPDATE CART")
        const updateStatus = await CartModel.updateOne(
            {"userID": data.userID, 
            "items.name": data.itemName,
            "items.color": data.itemColor,
            "items.size": data.itemSize,
            "items.inseam": data.itemInseam},
            { $inc: { "items.$.quantity": data.itemQuantity} })
        console.log(updateStatus)
        console.log(updateStatus.modifiedCount)
    
        if(updateStatus.modifiedCount == 0){ //no exisiting version of this product in cart
            console.log("NEW PRODUCT")
            await CartModel.updateOne(
                {"userID": data.userID},
                { "$push": 
                    {"items": 
                        {
                            "name": data.itemName,
                            "color": data.itemColor,
                            "size": data.itemSize,
                            "inseam": data.itemInseam,
                            "quantity": data.itemQuantity,
                            "price": data.itemPrice
                        }
                    }
                })
            }
            console.log("HAPPY")
            return new Response('Success!', {
                status: 200,
                })
    }
  }