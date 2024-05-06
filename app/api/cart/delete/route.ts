import {NextResponse} from 'next/server';
import {CartModel} from '../../db';



export async function POST(request: Request) {
    console.log("Deleting Cart")
    const data = await request.json();

    await CartModel.findOneAndDelete(
        {"userID": data.userID},)

    
    return new Response('Deleted Cart!', {
        status: 200,
        })

}