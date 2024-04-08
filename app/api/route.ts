import {NextResponse} from 'next/server';
import {ProductModel} from './db';
// import {stemmer} from 'stemmer';

// Gets all language data from the DB
export async function GET(request: Request) {
    //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
    const url = new URL(request.url);
    // const res = await fetch(request)
    // const url = await res.url;
    const searchParams = new URLSearchParams(url.search);

    if (searchParams.size == 1){
        const results = ProductModel.find(
            {category: searchParams.get('category')} //stock:{$gt:0}
            );
        
        return NextResponse.json(results || {});
    }else if (searchParams.size ==2){
        
        const results = ProductModel.find(
            {category: searchParams.get('category'), colors: searchParams.get('colors')} //stock:{$gt:0}
            );
        
        return NextResponse.json(results || {});
    }else if (searchParams.size ==3){
        
        const colorMatches = ProductModel.find(
            {category: searchParams.get('category'), colors: searchParams.get('colors')} //stock:{$gt:0}
            );
        
        (await colorMatches).forEach(function(match){
            const sizeMatches = ProductModel.find(
                {}
                );
        })
    }else

    
    // ProductModel.find({color:{"$elemMatch":{"$elemMatch":{"$in":['item00']}}} })

    


    
}

//images

//cart: i need product id, quantinty,and size

