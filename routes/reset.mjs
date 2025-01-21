import express from "express";
const router = express.Router();

import resetController from "../controllers/reset.mjs";

router.get("/seed", resetController.seed);

router.get("/", resetController.getEntries);
router.put("/:id", resetController.editEntry); // Edit an entry
router.delete("/:id", resetController.deleteEntry); // Delete an entry
router.post("/", resetController.createReflection); //create

export default router;
