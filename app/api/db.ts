import mongoose from 'mongoose';

// Connect to the database
mongoose.connect(process.env.MONGODB_URI!);
const productCategories = ['shirt', 't-shirt', 'shorts', 'jeans']

// Define the schema for the data
const ProductSchema = new mongoose.Schema({
        name: String,
        description: String, //client description of their product
        category: { type: String,  enum: productCategories},//shirt, t shirt, 
        material: String, //jean, cotton, ect
        colors:[
            {
                color: String, //dark wash/ medium wash
                sizes:[{
                    size: String,
                    inseams:[{
                        image: String,
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

export const ProductModel = mongoose.model ('products', ProductSchema);

// Make the model and schema available
module.exports = ProductModel;