
// const { Schema } = mongoose;
// mongoose.Promise = global.Promise;
// Connect to the database

// mongoose.connect('mongodb://localhost:27017/maindb', { useNewUrlParser: true});

import mongoose from "mongoose";

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

export default connectDB;