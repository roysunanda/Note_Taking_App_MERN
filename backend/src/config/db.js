import mongoose from "mongoose";

const connectDB = async () => {
  const uri = `${process.env.MONGO_URI}/${process.env.DB_NAME}`;
  try {
    const connect = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`MongoDB connection failed! \n${error}`);
    process.exit(1);
  }
};

export { connectDB };
