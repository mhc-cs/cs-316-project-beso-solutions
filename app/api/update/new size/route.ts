import {NextResponse} from 'next/server';
var ProductModel = require('../../db');


export async function POST(request: Request) {
    const data = await request.json();
    await ProductModel.updateOne(
        {  "name": data.name, "colors.color": data.color },
        { "$push": 
            {"colors.$.sizes": 
                {
                    "size": data.size,
                    "inseams": [{
                        "ineseam": data.inseam,
                        "price":data.prize, 
                        "stock":data.stock
                    }]
                }
            }
        }
    )
}