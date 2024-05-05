const mongoose = require('mongoose');
import CartModel from '../..//models/cartModel.js';

export async function POST(req: Request) {
    const data = await req.json();
    const exists = await ProductModel.find(
        {userID: data.userID}
    );
    if (exists.length == 0){ //brand new cart
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
    }else{ //update cart
        const updateStatus = await CartModel.updateOne(
            {"userID": data.name, 
            "items.name": data.itemName,
            "items.color": data.itemColor,
            "items.size": data.itemSize,
            "items.inseam": data.itemInseam},
            { $inc: { "items.quantity": data.quantity} })
    
        if(updateStatus.modifiedCount == 0){ //no exisiting version of this product in cart
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
    }
  }