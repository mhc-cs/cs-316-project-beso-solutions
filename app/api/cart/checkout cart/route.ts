import {NextResponse} from 'next/server';
import {ProductModel} from '../../db';
import {CartModel} from '../../db';

export async function POST(request: Request) {
    const url = new URL(request.url);
    // const res = await fetch(request)
    // const url = await res.url;
    const searchParams = new URLSearchParams(url.search);

    const cart = await CartModel.findOne(
        {userID: searchParams.get('userID')},
        { _id: 0, items: 1,  }
    );
    
    //decrease actual stock in product db by amount checked out
    const checkoutItems = cart.items
    for (let i = 0; i < checkoutItems.length; i++) {
        try {
            await ProductModel.updateOne(
                {"name": checkoutItems[i].name, "colors.color": checkoutItems[i].color,
                "colors.sizes.size": checkoutItems[i].size},
                { $inc: { "colors.$[k].sizes.$[i].inseams.$[j].stock": -checkoutItems[i].quantity} },
                { arrayFilters: [{"k.color": checkoutItems[i].color},{ "i.size": checkoutItems[i].size },
                {"j.inseam": checkoutItems[i].inseam}] }
            )
        }
        catch (err) {
            //TODO: neg stock error handling
           console.log(err);
          }
      }
    
    //TODO: checkout?
    
    return NextResponse.json(results || {});

}