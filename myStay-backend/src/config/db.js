import mongoose from "mongoose";

export const connectToDb = async () => {
  const uri = process.env.MONGODB_URI;

  try {
    mongoose.connection.on('connected',()=>console.log("before connection ,connected"))
    await mongoose.connect(`${uri}/hotel-booking-git1`);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }

  mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error.message);
  });
};
