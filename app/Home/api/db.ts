import mongoose from 'mongoose';

// Connect to the database
mongoose.connect(process.env.MONGODB_URI!);
// const productCategories = ['shirt', 't-shirt', 'shorts', 'jeans']

const ImageSchema = new mongoose.Schema({ 
    img: { 
       data: Buffer, 
       contentType: String 
    }
 }
);

// Define the schema for the data
const ProductSchema = new mongoose.Schema({
        name: String,
        description: String, //client description of their product
        category: String,//shirt, t shirt, 
        material: String, //jean, cotton, ect
        colors:[
            {
                color: String, //dark wash/ medium wash
                image: [ImageSchema],
                sizes:[{
                    size: String,
                    inseams:[{
                        inseam: Number,
                        price: Number,
                        stock: Number,
                    }]
                }]
            }
        ],
        
});


const cartSchema = new mongoose.Schema({
    name: String,
    description: String, //client description of their product
    category: String,//shirt, t shirt, 
    material: String, //jean, cotton, ect
    colors:[
        {
            color: String, //dark wash/ medium wash
            image: [ImageSchema],
            sizes:[{
                size: String,
                inseams:[{
                    inseam: Number,
                    price: Number,
                    stock: Number,
                }]
            }]
        }
    ],
    
});

// const Pants = new mongoose.Schema({
//     category: "Pants",//shirt, t shirt, 
//     name: String,
//     productType:  String, //ex: ['jean', 'long', 'short', 'cargo']
//     description: String, //client description of their product
//     material: String, //jean, cotton, ect
//     colors:[
//         {
//             color: String,
//             sizes:[{
//                 size: String,
//                 inseams:[{
//                     inseam: Number,
//                     price: Number,
//                     stock: Number,
//                 }]
//             }]
//         }
//     ],
    
// });


// Create a model.  This is what provides the nice API to
// manipulate the database.



export const ImageModel = mongoose.model ('images', ImageSchema);

export const ProductModel = mongoose.model ('products', ProductSchema);

// Make the model and schema available
module.exports = ProductModel;
module.exports = ImageModel;