import express from "express";
const router = express.Router();

import habitContoller from "../controllers/habit.mjs";

router.get("/seed", habitContoller.seed);

router.get("/", habitContoller.getEntries);

// TODO: POST new goal
// TODO: get indivifual goal
// TODO: get based on criteria
// TODO: edit goal
// TODO: delete goal

export default router;
