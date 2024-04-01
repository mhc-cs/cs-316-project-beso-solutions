import mongoose from 'mongoose';

// Connect to the database
mongoose.connect(process.env.MONGODB_URI!);

// Define the schema for the data
const ProductSchema = new mongoose.Schema({
        size: String, //small, med, large 
        category: String, //clothing, accessories, ect
        cut: String ,//long short,
        material: String, //jean, fabric, ect
});

// Create a model.  This is what provides the nice API to
// manipulate the database.
export const ProductModel = mongoose.model ('messages', ProductSchema);

// Make the model and schema available
module.exports = ProductModel;