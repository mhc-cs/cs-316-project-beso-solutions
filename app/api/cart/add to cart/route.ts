import {NextResponse} from 'next/server';
import {CartModel} from '../../db';

export async function POST(request: Request) {
        
    const updateStatus = await CartModel.updateOne(
            {"userID": request.body.name, 
            "items.name": request.body.itemName,
            "items.color": request.body.itemColor,
            "items.size": request.body.itemSize,
            "items.inseam": request.body.itemInseam},
            { $inc: { "items.quantity": request.body.quantity} })
    
    if(updateStatus.modifiedCount == 0){ //no exisiting version of this product in cart
        await CartModel.updateOne(
            {"userID": request.body.userID},
            { "$push": 
                {"items": 
                    {
                        "name": request.body.itemName,
                        "color": request.body.itemColor,
                        "size": request.body.itemSize,
                        "inseam": request.body.itemInseam,
                        "quantity": request.body.itemQuantity,
                        "price": request.body.itemPrice
                    }
                }
            })
        }

}