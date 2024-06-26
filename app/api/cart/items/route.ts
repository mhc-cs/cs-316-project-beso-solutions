import {NextResponse} from 'next/server';
import {CartModel} from '../../db';
import {ProductModel} from '../../db';



export async function GET(request: Request) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    try{
        const cart = await CartModel.find(
            {userID: searchParams.get('userID')},
            {_id:1, items:1}
        );
        return NextResponse.json(cart);
    }catch (error) {
        console.log(error)
        return new Response(`Webhook error: ${error.message}`, {
            status: 400,
        })
    }
        
    

}