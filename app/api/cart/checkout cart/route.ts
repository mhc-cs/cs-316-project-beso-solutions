import {NextResponse} from 'next/server';
import {ProductModel} from '../../db';

export async function POST(request: Request) {
    const url = new URL(request.url);
    // const res = await fetch(request)
    // const url = await res.url;
    const searchParams = new URLSearchParams(url.search);
    
    const cart = await ProductModel.find(
        {category: searchParams.get('userID')}
    );
    

    //TODO: checkout?
    
    return NextResponse.json(results || {});

}