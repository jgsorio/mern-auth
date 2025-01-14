import mongoose from "mongoose";
import { ENV } from "./env";

export async function connectToDatabase() {
  try {
    await mongoose.connect(ENV.MONGO_DSN);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error to MongoDB connect", error);
    process.exit(1);
  }
}
