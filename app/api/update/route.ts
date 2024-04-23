
import {NextResponse} from 'next/server';
var ProductModel = require('../db');

export async function POST(request: Request) {
    const data = await request.json();
    await ProductModel.updateOne(
        {"name": data.name, "colors.color": data.color,"colors.sizes.size": data.size},
        { $inc: { "colors.$[k].sizes.$[i].inseams.$[j].stock": data.stockChng } },
      { arrayFilters: [{"k.color": data.color},{ "i.size": data.size },{"j.inseam": data.inseam}] }
    )
}


