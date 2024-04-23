import {NextResponse} from 'next/server';
import {CartModel} from '../../db';


export async function POST(request: Request) {
    const data = await request.json();
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