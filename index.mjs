//? importing the  dependencies
import express from "express";
import dotenv from "dotenv";
import logger from "morgan";

dotenv.config();

//!import conn.mjs so that i can connect to my db
import db from "./db/conn.mjs";

//? to connect front and back end without issues
import cors from "cors";
//*this is the the line

import budgetEntries from "./routes/budget.mjs";
import goalEntries from "./routes/goal.mjs";
import habitEntries from "./routes/habit.mjs";
import resetEntries from "./routes/reset.mjs";
//? set up port
const PORT = process.env.PORT || 5022;

//*create app
const app = express();

//*Middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

//!Routes
app.get("/", (req, res) => {
  res.send("<h1> Monthly Reset</h1>");
});

//* this is the plug

app.use("/api/budget", budgetEntries);
app.use("/api/goal", goalEntries);
app.use("/api/habit", habitEntries);
app.use("/api/reset", resetEntries);

//user

//? this should have list of the appropriate end point
app.get("*/", (req, res) => {
  res.redirect("/");
});

//*global error handling

app.use((err, _req, res, next) => {
  res.status(500).send("there was an issues on the server");
});

// *start the server
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
