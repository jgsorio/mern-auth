import mongoose from "mongoose";
import { User } from "../user.type";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema<User>({
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

userSchema.pre("save", function (next) {
  if (this.isModified("password") || this.isNew) {
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash;
  }

  if (this.verificationToken && !this.verificationTokenExpiredAt) {
    this.verificationTokenExpiredAt = new Date();
    this.verificationTokenExpiredAt.setMinutes(
      this.verificationTokenExpiredAt.getMinutes() + 10
    );
  }
  next();
});

export const UserModel = mongoose.model<User>("User", userSchema);
