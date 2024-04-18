import {NextResponse} from 'next/server';
var ProductModel = require('../../db');


export async function POST(request: Request) {
    await ProductModel.updateOne(
        {  "name": request.body.name},
        { "$push": 
            {"colors.$[j].sizes.$[i].inseams": 
                    {
                    "ineseam": request.body.inseam,
                    "price":request.body.prize, 
                    "stock":request.body.stock
                }
            }
        },
        { arrayFilters: [{"j.color": request.body.color},{ "i.size": request.body.size }] }
    )
}