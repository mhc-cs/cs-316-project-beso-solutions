import {NextResponse} from 'next/server';
var ProductModel = require('../../db');


export async function POST(request: Request) {
    const data = await request.json();
    await ProductModel.updateOne(
        {  "name": data.name},
        { "$push": 
            {"colors.$[j].sizes.$[i].inseams": 
                    {
                    "ineseam": data.inseam,
                    "price":data.prize, 
                    "stock":data.stock
                }
            }
        },
        { arrayFilters: [{"j.color": data.color},{ "i.size": data.size }] }
    )
}