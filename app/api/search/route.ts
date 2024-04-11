import {NextResponse} from 'next/server';
import {ProductModel} from '../db';

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

        const results = await ProductModel.aggregate([
            {$unwind : "$colors"},
            {$match : {category:searchParams.get('category'), "colors.color": searchParams.get('colors')}},
            {$project : {_id : 1,
                name: 1,
                color : "$colors.color",
                image: "$colors.image",
                sizes : "$colors.sizes"}}
            ])

        return NextResponse.json(results || {});

    }else if (searchParams.size ==3){
        
        const results = await ProductModel.aggregate([
            {$unwind : "$colors"},
            {$match : {category:searchParams.get('category'), "colors.color": searchParams.get('colors')}},
            {$project : {_id : 1,
                name: 1,
                color : "$colors.color",
                image: "$colors.image",
                sizes : "$colors.sizes"}},
            {$unwind : "$sizes"},
            {$match : {"sizes.size":searchParams.get('size')}},
            {$project : {_id : 1,
                name: 1,
                color : 1,
                image: 1,
                size : "$sizes.size",
                inseams:"$sizes.inseams"}}
            ])
        return NextResponse.json(results || {});


    }else if(searchParams.size ==4){ //inseams
        
        const results = await ProductModel.aggregate([
            {$unwind : "$colors"},
            {$match : {category:searchParams.get('category'), "colors.color": searchParams.get('colors')}},
            {$project : {_id : 1,
                name: 1,
                color : "$colors.color",
                image: "$colors.image",
                sizes : "$colors.sizes"}},
            {$unwind : "$sizes"},
            {$match : {"sizes.size":searchParams.get('size')}},
            {$project : {_id : 1,
                name: 1,
                color : 1,
                image: 1,
                size : "$sizes.size",
                inseams:"$sizes.inseams"}},
            {$unwind : "$inseams"},{$match : {"inseams.inseam":28}},{$project : {_id : 1,
                name: 1,
                color : 1,
                image: 1,
                size : 1,
                inseam:"$inseams.inseam",
                price:"$inseams.price",
                stock:"$inseams.stock"}},
            {$match : {stock:{$gt:0}}}
            ])
            
        return NextResponse.json(results || {});
    }

}

//images



//cart: i need product id, quantinty,and size
