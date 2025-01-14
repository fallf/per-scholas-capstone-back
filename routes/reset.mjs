import express from "express";
const router = express.Router();

import resetContoller from "../controllers/reset.mjs";

router.get("/seed", resetContoller.seed);

router.get("/", resetContoller.getEntries);

// TODO: POST new goal
// TODO: get indivifual goal
// TODO: get based on criteria
// TODO: edit goal
// TODO: delete goal

export default router;
