import {NextResponse} from 'next/server';
import {ProductModel} from '../db';

export async function GET(request: Request) {

    await ProductModel.updateOne(
        {  "name": request.body.name, "colors.color": request.body.color },
        { "$push": 
            {"colors.$.sizes": 
                {
                    "size": request.body.size,
                    "inseams": [{
                        "ineseam": request.body.inseam,
                        "price":request.body.prize, 
                        "stock":request.body.stock
                    }]
                }
            }
        }
    )
}