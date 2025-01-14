import Habit from "../models/habit.mjs";

async function seed(req, res) {
  const TODAY = new Date();
  try {
    // Seed data array
    const seedData = [
      {
        name: "Running",
        frequency: "weekly",
        status: "active",
        completed: false,
        due: TODAY,
      },
      {
        name: "Meditation",
        frequency: "daily",
        status: "active",
        completed: false,
        due: TODAY,
      },
      {
        name: "Reading",
        frequency: "monthly",
        status: "completed",
        completed: true,
        due: TODAY,
      },
    ];

    await Habit.create(seedData);
    // Respond to the request
    res.status(200).send({ message: "seed data created successfully!!" });
  } catch (err) {
    res.status(400).send(err);
  }
}

const getEntries = async (req, res) => {
  try {
    const foundEntries = await Habit.find({});
    res.status(200).json(foundEntries);
  } catch (err) {
    res.send(err).status(400);
  }
};

export default { seed, getEntries };
