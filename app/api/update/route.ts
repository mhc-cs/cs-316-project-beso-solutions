
import {NextResponse} from 'next/server';
import {ProductModel} from '../db';

export async function POST(request: Request) {
    await ProductModel.updateOne(
        {"name": request.body.name, "colors.color": request.body.color,"colors.sizes.size": request.body.size},
        { $inc: { "colors.$[k].sizes.$[i].inseams.$[j].stock": request.body.stockChng } },
      { arrayFilters: [{"k.color": request.body.color},{ "i.size": request.body.size },{"j.inseam": request.body.inseam}] }
    )
}


