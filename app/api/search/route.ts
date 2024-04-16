import {NextResponse} from 'next/server';
import {ProductModel} from '../db';

// Gets all language data from the DB
export async function GET(request: Request) {
    //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
    const url = new URL(request.url);
    // const res = await fetch(request)
    // const url = await res.url;
    const searchParams = new URLSearchParams(url.search);
    return NextResponse.json(searchParams.get('category') || {});

    if (searchParams.size == 1){
        const results = await ProductModel.find(
            {category: searchParams.get('category'),"colors.sizes.inseams.stock":{$gt:4}}
            );
        
        return NextResponse.json(results || {});
    }else if (searchParams.get('color')==null){  
        if (searchParams.get('size')==null){//cat,...
            if (searchParams.get('inseam')==null){//cat
                const results = await ProductModel.find(
                    {category: searchParams.get('category'),"colors.sizes.inseams.stock":{$gt:4}}
                    );
                
                return NextResponse.json(results || {});
            }else{//cat,inseam
                const results = await ProductModel.find(
                    {category: searchParams.get('category'), 
                    "colors.sizes.inseams.inseam":searchParams.get('inseam'),
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                return NextResponse.json(results || {});
            }
        }
        else if (searchParams.get('inseam')==null){ //cat, size
            const results = await ProductModel.find(
                {category: searchParams.get('category'), 
                "colors.sizes.size":searchParams.get('size'),
                "colors.sizes.inseams.stock":{$gt:4}}
            );
            return NextResponse.json(results || {});
        }
        //cat, size, inseam
        const results = await ProductModel.find(
            {category: searchParams.get('category'), 
            "colors.sizes.size":searchParams.get('size'),
            "colors.sizes.inseams.inseam":searchParams.get('inseam'),
            "colors.sizes.inseams.stock":{$gt:4}}
        );
        return NextResponse.json(results || {});
        
    }else{//cat, color,...
        if (searchParams.get('size')==null){
            if (searchParams.get('inseam')==null){ //cat, color
                const results = await ProductModel.find(
                    {category: searchParams.get('category'), 
                    "colors.color":searchParams.get('color'),
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                return NextResponse.json(results || {});
            }else{ //cat, color, inseam
                const results = await ProductModel.find(
                    {category: searchParams.get('category'), 
                    "colors.sizes.color":searchParams.get('color'),
                    "colors.sizes.inseams.inseam":searchParams.get('inseam'),
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                return NextResponse.json(results || {});
            }
        }else{//cat, color, size, ..
            if (searchParams.get('inseam')==null){//cat, color, size
                const results = await ProductModel.find(
                    {category: searchParams.get('category'), 
                    "colors.color":searchParams.get('color'),
                    "colors.sizes.size":searchParams.get('size'),
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                return NextResponse.json(results || {});
            }else{ //cat, color, size, inseam
                const results = await ProductModel.find(
                    {category: searchParams.get('category'), 
                    "colors.sizes.color":searchParams.get('color'),
                    "colors.sizes.size":searchParams.get('size'),
                    "colors.sizes.inseams.inseam":searchParams.get('inseam'),
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                return NextResponse.json(results || {});
            }
        }
    }
}

//images
