import {NextResponse} from 'next/server';
import {ProductModel} from '../db';

// mongoose.connect('mongodb://localhost:27017/maindb', { useNewUrlParser: true});

// Gets all language data from the DB
export async function GET(request: Request) {
    console.log('HELLO')
    console.log(request.url)
    //https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    console.log(searchParams)
    console.log(searchParams.size)
    console.log(searchParams.get('color')=='')
    console.log(searchParams.get('hello'))
    if (searchParams.get('category') == ''){
        const results = await ProductModel.find(
            {"colors.sizes.inseams.stock":{$gt:4}}
            );
        
        console.log(results)
            return NextResponse.json(results || {});
    }
    if (searchParams.get('color') == ''&& searchParams.get('size') == ''&& searchParams.get('inseam') == ''){
        const results = await ProductModel.find(
            {category: searchParams.get('category'),"colors.sizes.inseams.stock":{$gt:4}}
            );
        
        console.log(results)
            return NextResponse.json(results || {});
    }else if (searchParams.get('color')==''){  
        if (searchParams.get('size')==''){//cat,...
            if (searchParams.get('inseam')==''){//cat
                const results = await ProductModel.find(
                    {category: searchParams.get('category'),"colors.sizes.inseams.stock":{$gt:4}}
                    );
                
                console.log(results)
                    return NextResponse.json(results || {});
            }else{//cat,inseam
                const results = await ProductModel.find(
                    {category: searchParams.get('category'), 
                    "colors.sizes.inseams.inseam":searchParams.get('inseam'),
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                console.log(results)
                return NextResponse.json(results || {});
            }
        }
        else if (searchParams.get('inseam')==''){ //cat, size
            const results = await ProductModel.find(
                {category: searchParams.get('category'), 
                "colors.sizes.size":searchParams.get('size'),
                "colors.sizes.inseams.stock":{$gt:4}}
            );
            console.log(results)
            return NextResponse.json(results || {});
        }
        //cat, size, inseam
        const results = await ProductModel.find(
            {category: searchParams.get('category'), 
            "colors.sizes.size":searchParams.get('size'),
            "colors.sizes.inseams.inseam":searchParams.get('inseam'),
            "colors.sizes.inseams.stock":{$gt:4}}
        );
        console.log(results)
        return NextResponse.json(results || {});
        
    }else{//cat, color,...
        if (searchParams.get('size')==''){
            if (searchParams.get('inseam')==''){ //cat, color
                const results = await ProductModel.find(
                    {category: searchParams.get('category'), 
                    "colors.color":searchParams.get('color'),
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                console.log(results)
                return NextResponse.json(results || {});
            }else{ //cat, color, inseam
                const results = await ProductModel.find(
                    {category: searchParams.get('category'), 
                    "colors.sizes.color":searchParams.get('color'),
                    "colors.sizes.inseams.inseam":searchParams.get('inseam'),
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                console.log(results)
                return NextResponse.json(results || {});
            }
        }else{//cat, color, size, ..
            if (searchParams.get('inseam')==''){//cat, color, size
                const results = await ProductModel.find(
                    {category: searchParams.get('category'), 
                    "colors.color":searchParams.get('color'),
                    "colors.sizes.size":searchParams.get('size'),
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                console.log(results)
                return NextResponse.json(results || {});
            }else{ //cat, color, size, inseam
                const results = await ProductModel.find(
                    {category: searchParams.get('category'), 
                    "colors.sizes.color":searchParams.get('color'),
                    "colors.sizes.size":searchParams.get('size'),
                    "colors.sizes.inseams.inseam":searchParams.get('inseam'),
                    "colors.sizes.inseams.stock":{$gt:4}}
                );
                console.log(results)
                return NextResponse.json(results || {});
            }
        }
    }
}