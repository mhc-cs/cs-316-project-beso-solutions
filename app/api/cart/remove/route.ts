import {NextResponse} from 'next/server';
import {CartModel} from '../../db';



export async function POST(request: Request) {
    const data = await request.json();


    await CartModel.findOneAndUpdate(
        { "userID": data.userID },
        { $pull: { "items": { _id: data.itemId} } },
        { new: true }
    )

    
    return new Response('Removed Item!', {
        status: 200,
        })

}