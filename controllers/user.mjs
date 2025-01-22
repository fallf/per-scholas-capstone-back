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
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Failed to register user");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if the user email exists
    const user = await User.findOne({ email });

    // check if the user exists and if password matches
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    // Send error response if any issue occurs
    res.status(500).json({ message: error.message });
  }
});

export const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});

// gererate JWT token
function generateToken(id) {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
  }

  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
  } catch (error) {
    throw new Error("Error generating token: " + error.message);
  }
}
