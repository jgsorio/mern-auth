import mongoose from "mongoose";
import { User } from "../user.type";

const userSchema = new mongoose.Schema<User>({
  _id:  { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  lastLogin: { type: Date, required: true,  default: Date.now },
  isVerified: { type: Boolean, required: true, default: false },
  resetPasswordToken: { type: String },
  resetPasswordExpiredAt: { type: Date },
  verificationToken: { type: String },
  verificationTokenExpiredAt: { type: Date }
}, { timestamps: true });

export const UserModel = mongoose.model("User", userSchema);
