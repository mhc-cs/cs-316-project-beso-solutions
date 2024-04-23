import {NextResponse} from 'next/server';
import {ProductModel} from '../../db';
import {ImageModel} from '../../db';

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