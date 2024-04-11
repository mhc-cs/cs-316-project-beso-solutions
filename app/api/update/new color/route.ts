import {NextResponse} from 'next/server';
import {ProductModel} from '../db';
import {ImageModel} from '../db';

export async function GET(request: Request) {
    
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