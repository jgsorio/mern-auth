import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { generateVerificationToken } from "../utils/auth";

export const signup = async (request: Request, response: Response) => {
  try {
    const { name, email, password } = request.body;
    const userAlreadyExists = await UserModel.findOne({ email });

    if (userAlreadyExists) {
      return response.status(400).json({ success: false, message: "User already exists" });
    }

    const verificationToken = generateVerificationToken();
    
    const user = await UserModel.create({
      name,
      email,
      password,
      verificationToken,
    });

    return response.status(201).json({ success: true, message: "User created", data: user });
  } catch (error) {
    console.error("Error to signup", error);
    return response.status(500).json({ success: false, message: "Error to signup" });
  }
};
