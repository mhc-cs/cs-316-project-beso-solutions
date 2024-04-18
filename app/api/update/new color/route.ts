import {NextResponse} from 'next/server';
var ProductModel = require('../../db');
var ImageModel = require('../../db');

export async function POST(request: Request) {
    
    await ProductModel.updateOne(
        {"name": request.body.name},
        { "$push": 
            {"colors": 
                {
                "color": request.body.color,
                "sizes":[{
                        "size": request.body.size,
                        "inseams": [{
                            "ineseam": request.body.inseam,
                            "price":request.body.prize, 
                            "stock":request.body.stock
                        }]
                    }]
                }
            }
        }
    )

}