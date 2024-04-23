import {NextResponse} from 'next/server';
var ProductModel = require('../db');


// Gets all language data from the DB
export async function GET(request: Request) {
    console.log('HELLO')
    const data = await request.json();
    if (data.size == 0){
        const results = await ProductModel.find(
            {"colors.sizes.inseams.stock":{$gt:4}}
            );
        
        return NextResponse.json(results || {});
    }
    if (data.size == 1){
        const results = await ProductModel.find(
            {category: data.category,"colors.sizes.inseams.stock":{$gt:4}}
            );
        
        return NextResponse.json(results || {});
    }else if (data.color==null){  
        if (data.size==null){//cat,...
            if (data.inseam==null){//cat
                const results = await ProductModel.find(
                    {category: data.category,"colors.sizes.inseams.stock":{$gt:4}}
                    );
                
                return NextResponse.json(results || {});
            }else{//cat,inseam
                const results = await ProductModel.find(
                    {category: data.category, 
                    "colors.sizes.inseams.inseam":data.inseam,
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                return NextResponse.json(results || {});
            }
        }
        else if (data.inseam==null){ //cat, size
            const results = await ProductModel.find(
                {category: data.category, 
                "colors.sizes.size":data.size,
                "colors.sizes.inseams.stock":{$gt:4}}
            );
            return NextResponse.json(results || {});
        }
        //cat, size, inseam
        const results = await ProductModel.find(
            {category: data.category, 
            "colors.sizes.size":data.size,
            "colors.sizes.inseams.inseam":data.inseam,
            "colors.sizes.inseams.stock":{$gt:4}}
        );
        return NextResponse.json(results || {});
        
    }else{//cat, color,...
        if (data.size==null){
            if (data.inseam==null){ //cat, color
                const results = await ProductModel.find(
                    {category: data.category, 
                    "colors.color":data.color,
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                return NextResponse.json(results || {});
            }else{ //cat, color, inseam
                const results = await ProductModel.find(
                    {category: data.category, 
                    "colors.sizes.color":data.color,
                    "colors.sizes.inseams.inseam":data.inseam,
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                return NextResponse.json(results || {});
            }
        }else{//cat, color, size, ..
            if (data.inseam==null){//cat, color, size
                const results = await ProductModel.find(
                    {category: data.category, 
                    "colors.color":data.color,
                    "colors.sizes.size":data.size,
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                return NextResponse.json(results || {});
            }else{ //cat, color, size, inseam
                const results = await ProductModel.find(
                    {category: data.category, 
                    "colors.sizes.color":data.color,
                    "colors.sizes.size":data.size,
                    "colors.sizes.inseams.inseam":data.inseam,
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                return NextResponse.json(results || {});
            }
        }
    }
}

//images
