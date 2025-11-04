import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function connectDB() {
   const MONGODB_URI = process.env.MONGODB_URI;
   if(!MONGODB_URI){
    throw new Error("MONGODB_URI is not defined");
   }
   const connect = await mongoose.connect(MONGODB_URI);
   console.log(`Connected to MongoDB: ${connect.connection.host}`);

}