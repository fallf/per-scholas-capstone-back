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
//TODO: add to be able user authorization before doing crud by using the middleware protection

export default router;
