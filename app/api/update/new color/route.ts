import {NextResponse} from 'next/server';
var ProductModel = require('../../db');
var ImageModel = require('../../db');

export async function POST(request: Request) {
    const data = await request.json();
    await ProductModel.updateOne(
        {"name": data.name},
        { "$push": 
            {"colors": 
                {
                "color": data.color,
                "sizes":[{
                        "size": data.size,
                        "inseams": [{
                            "ineseam": data.inseam,
                            "price":data.prize, 
                            "stock":data.stock
                        }]
                    }]
                }
            }
        }
    )

}