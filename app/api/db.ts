import mongoose from 'mongoose';

// Connect to the database
mongoose.connect(process.env.MONGODB_URI!);
// const productCategories = ['shirt', 't-shirt', 'shorts', 'jeans']
const orderStatuses = ['processed', 'shipped', 'delivered', 'failed']
const paymentStatuses = ['processed', 'failed']

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
                        stock: {type: Number, default: 0},
                    }]
                }]
            }
        ],
        
});


const CartSchema = new mongoose.Schema({
    userID: String,
    paymentStatus: { type: String, enum: paymentStatuses}, //client description of their product
    orderStatus: { type: String, enum: orderStatuses},//shirt, t shirt, 
    items:[{
                name: String,
                color: String,
                size: String,
                inseam: Number,
                quantity: Number,
                price: Number
            }]
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

export const CartModel = mongoose.model ('cart', CartSchema);

// Make the model and schema available
module.exports = ProductModel;
module.exports = ImageModel;
module.exports = CartModel;