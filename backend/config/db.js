import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sonakshi862be22:11092003@cluster0.we0l4.mongodb.net/food-rest').then(()=>console.log("DB Connected"));
}