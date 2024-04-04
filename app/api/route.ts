import {NextResponse} from 'next/server';
import {ProductModel} from './db';
// import {stemmer} from 'stemmer';

// Gets all language data from the DB
export async function GET(request: Request) {
    var req:string[]=["shirt", "female"]; 
    const res = await ProductModel.find(
        {productType: req[0], sex:req[1], ageRange:req[2], color:req[3], stock:{$gt:0}}
        );
    
    return NextResponse.json(res || {});
}

//how do i specify the request? and params for that request
//advice on handling sizes

//images

//cart: i need product id, quantinty,and size

