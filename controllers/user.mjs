import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.mjs";
import asyncHandler from "express-async-handler";

export const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("All fields are required");
    }
    // check if the user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error("Failed to register user");
    }
  } catch (error) {
    console.error(error); // Log the full error
    res.status(500).json({ message: error.message }); // Return error message to client
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

export const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});
