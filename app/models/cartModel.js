import mongoose from "mongoose";

// Define the schema for the data
const CartSchema = new mongoose.Schema({
    userID: String,
    paymentStatus: { type: String, enum: paymentStatuses, default: 'not started'}, //client description of their product
    orderStatus: { type: String, enum: orderStatuses, default: 'not started'},//shirt, t shirt, 
    items:[{
                name: String,
                color: String,
                size: String,
                inseam: Number,
                quantity: {type: Number, required:[true, "Need Item Quantity"]},
                price: Number
            }]
});

export default mongoose.model("cart", CartSchema);
// export const CartModel = mongoose.model ('cart', CartSchema);