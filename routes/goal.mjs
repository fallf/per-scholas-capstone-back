import express from "express";
const router = express.Router();

import goalContoller from "../controllers/goal.mjs";

router.get("/seed", goalContoller.seed);
//get all goals
router.get("/", goalContoller.getEntries);
// Add a new goal
router.post("/", goalContoller.createGoal);
// Update an existing goal
router.put("/:id", goalContoller.updateGoal);
// Delete a goal
router.delete("/:id", goalContoller.deleteGoal);

// TODO: POST new goal
// TODO: get indivifual goal
// TODO: get based on criteria
// TODO: edit goal
// TODO: delete goal
//TODO: add to be able user authorization before doing crud by using the middleware protection
export default router;
