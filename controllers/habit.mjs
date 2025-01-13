import Habit from "../controllers/habit.mjs";

async function seed(req, res) {
  try {
    // Seed data array
    const seedData = [
      {
        name: "Running",
        frequency: "weekly",
        status: "active", // Fixed the invalid value 'a' to 'active'

        completed: false,
        due: new Date("2025-02-01"),
      },
      {
        name: "Meditation",
        frequency: "daily",
        status: "active",

        completed: false,
        due: new Date("2025-01-15"),
      },
      {
        name: "Reading",
        frequency: "monthly",
        status: "completed",

        completed: true,
        due: new Date("2025-01-01"),
      },
    ];

    // Insert seed data into the Habit collection
    const result = await Habit.insertMany(seedData);
    console.log("Seed data added successfully:", result);

    // Respond to the request
    res
      .status(201)
      .json({ message: "Seed data added successfully", data: result });
  } catch (error) {
    console.error("Error seeding data:", error);

    // Respond with an error message
    res.status(500).json({ message: "Error seeding data", error });
  }
}

export default seed;
