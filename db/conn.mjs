//imports
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// global configuration

const mongoURI = process.env.ATLAS_URI;
const db = mongoose.connection;

//connect to mongo

mongoose.connect(mongoURI);
mongoose.connection.once("open", () => {
  console.log("connect to mongo");
});

export default db;
