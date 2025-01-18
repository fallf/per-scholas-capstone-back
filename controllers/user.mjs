import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.mjs";
import asyncHandler from "express-async-handler";

export const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register User" });
});

export const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

export const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});
