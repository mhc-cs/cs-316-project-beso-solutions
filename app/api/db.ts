import mongoose from 'mongoose';

// Connect to the database
mongoose.connect(process.env.MONGODB_URI!);
const sizes = ['xxs', 'xs', 's', 'm', 'l','xl']
const sexes = ['female', 'male', 'unisex']
const productTypes = ['shirt', 't-shirt', 'shorts', 'jeans']
const ages = ['adult', 'kid']
const colors = ['blue', 'red','green','orange','purple']
// Define the schema for the data
const ProductSchema = new mongoose.Schema({
        productName: String,
        description: String, //client description of their product
        price: Number,
        size:  { type: String, enum: sizes },
        category: String, //clothing, accessories, ect
        productType: { type: String,  enum: productTypes},//shirt, t shirt, 
        sex:  { type: String, enum: sexes },
        material: String, //jean, fabric, ect
        stock: Number, //how much is in stock
        ageRange:  { type: String,  enum: ages},
        color:  { type: String,  enum: colors},
});


// Create a model.  This is what provides the nice API to
// manipulate the database.
export const ProductModel = mongoose.model ('products', ProductSchema);

// Make the model and schema available
module.exports = ProductModel;