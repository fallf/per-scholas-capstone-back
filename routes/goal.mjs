import express from "express";
const router = express.Router();

import goalContoller from "../controllers/goal.mjs";

router.get("/seed", goalContoller.seed);

router.get("/", goalContoller.getEntries);

// TODO: POST new goal
// TODO: get indivifual goal
// TODO: get based on criteria
// TODO: edit goal
// TODO: delete goal

export default router;
