import express from "express";
const router = express.Router();

//TODO: add to be able user authorization before doing crud by using the middleware protection

import habitController from "../controllers/habit.mjs"; // Ensure proper import

// Seed data route
router.get("/seed", habitController.seed);

// Get all habit entries route
router.get("/", habitController.getEntries);

// Create a new habit route (POST)
router.post("/", habitController.createHabit);

// Get an individual habit by ID route (GET)
router.get("/:id", async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }
    res.status(200).json(habit);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update a habit by ID route (PUT)
router.put("/:id", habitController.updateHabit);

// Delete a habit by ID route (DELETE)
router.delete("/:id", habitController.deleteHabit);

export default router;
