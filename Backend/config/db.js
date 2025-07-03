import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ DB connection error:", error.message); // 🔍 See real reason
    process.exit(1); // Optional: stop app on DB failure
  }
};

export default connectDb;
