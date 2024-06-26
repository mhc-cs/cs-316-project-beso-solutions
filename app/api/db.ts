import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
// Connect to the database

// mongoose.connect('mongodb://localhost:27017/maindb', { useNewUrlParser: true});

const connectDB = async () => {
    try {
      // const conn = await mongoose.connect(process.env.MONGO_URL);
      const conn = await mongoose.connect('mongodb://localhost:27017/maindb', { useNewUrlParser: true});
      console.log(
        `Conneted To Mongodb Databse ${conn.connection.host}`
      );
    } catch (error) {
      console.log(`Errro in Mongodb ${error}`);
    }
  };

connectDB()
// const productCategories = ['shirt', 't-shirt', 'shorts', 'jeans']
const orderStatuses = ['not started','ordered', 'shipped', 'delivered', 'failed']
const paymentStatuses = ['not started', 'started','processed', 'failed']

const ImageSchema = new Schema({ 
    img: { 
       data: Buffer, 
       contentType: String 
    }
 }
);

// Define the schema for the data
const ProductSchema = new Schema({
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


const CartSchema = new Schema({
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


export const ProductModel = mongoose.models.ProductModel || mongoose.model('ProductModel', ProductSchema);
export const CartModel = mongoose.models.CartModel || mongoose.model ('CartModel', CartSchema);