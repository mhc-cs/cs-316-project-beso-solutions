import mongoose from "mongoose";

// Define the schema for the data
const ProductSchema = new mongoose.Schema({
    name: {type: String,lowercase: true},
    description: String, //client description of their product
    category: {type: String,lowercase: true},//shirt, t shirt, 
    material: {type: String,lowercase: true}, //jean, cotton, ect
    colors:[
        {
            color: {type: String,lowercase: true}, //dark wash/ medium wash
            // image: [ImageSchema],
            image: String,
            sizes:[{
                size: {type: String,lowercase: true},
                inseams:[{
                    inseam: Number,
                    price: Number,
                    stock: {type: Number,
                              validate: {
                                validator: function (v) {
                                  return v >= 0;
                                },
                                message: (props) => `${props.value}: There isn't enough stock!`,
                              },
                              default: 0,
                        }
                }]
            }]
        }
    ],
    
});

export default mongoose.model("products", ProductSchema);
// export const ProductModel = mongoose.model ('products', ProductSchema);