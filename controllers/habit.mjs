import Habit from "../models/habit.mjs";

//TODO: add to be able user authorization before doing crud

async function seed(req, res) {
  const TODAY = new Date();
  try {
    // Seed data array
    const seedData = [
      {
        name: "Running",
        description: "Daily morning jog to stay fit",
        frequency: "weekly",
        status: "active",
        completed: false,
        due: new Date(),
        weeklyProgress: {
          Monday: true,
          Tuesday: false,
          Wednesday: false,
          Thursday: false,
          Friday: true,
          Saturday: false,
          Sunday: false,
        },
      },
      {
        name: "Meditation",
        description: "10 minutes of mindfulness meditation",
        frequency: "daily",
        status: "active",
        completed: false,
        due: new Date(),
      },
      {
        name: "Reading",
        description: "Read a new book or article",
        frequency: "monthly",
        status: "completed",
        completed: true,
        due: new Date("2024-01-01"),
      },
      {
        name: "Cooking",
        description: "Try a new recipe or meal prep for the week",
        frequency: "weekly",
        status: "active",
        completed: false,
        due: new Date(),
        weeklyProgress: {
          Monday: false,
          Tuesday: false,
          Wednesday: false,
          Thursday: true,
          Friday: false,
          Saturday: true,
          Sunday: false,
        },
      },
      {
        name: "Workout",
        description: "Strength training at the gym",
        frequency: "daily",
        status: "active",
        completed: false,
        due: new Date(),
      },
      {
        name: "Journaling",
        description: "Write down thoughts and reflections",
        frequency: "daily",
        status: "active",
        completed: false,
        due: new Date(),
      },
      {
        name: "Learning a Language",
        description: "Practice French on Duolingo",
        frequency: "daily",
        status: "active",
        completed: false,
        due: new Date(),
      },
      {
        name: "Yoga",
        description: "Evening yoga session for relaxation",
        frequency: "weekly",
        status: "active",
        completed: false,
        due: new Date(),
        weeklyProgress: {
          Monday: false,
          Tuesday: true,
          Wednesday: false,
          Thursday: false,
          Friday: false,
          Saturday: true,
          Sunday: false,
        },
      },
      {
        name: "Volunteering",
        description: "Spend time at the local animal shelter",
        frequency: "monthly",
        status: "active",
        completed: false,
        due: new Date("2024-01-15"),
      },
      {
        name: "Gardening",
        description: "Tend to the plants in the backyard",
        frequency: "weekly",
        status: "active",
        completed: false,
        due: new Date(),
        weeklyProgress: {
          Monday: false,
          Tuesday: false,
          Wednesday: true,
          Thursday: false,
          Friday: false,
          Saturday: false,
          Sunday: true,
        },
      },
      {
        name: "Studying",
        description: "Review coding concepts for one hour",
        frequency: "daily",
        status: "active",
        completed: false,
        due: new Date(),
      },
      {
        name: "Cleaning",
        description: "Deep clean one area of the house",
        frequency: "weekly",
        status: "active",
        completed: false,
        due: new Date(),
        weeklyProgress: {
          Monday: false,
          Tuesday: false,
          Wednesday: true,
          Thursday: false,
          Friday: false,
          Saturday: false,
          Sunday: false,
        },
      },
      {
        name: "Networking",
        description: "Reach out to one new professional contact",
        frequency: "monthly",
        status: "active",
        completed: false,
        due: new Date("2024-01-30"),
      },
      {
        name: "Music Practice",
        description: "Practice piano or guitar for 30 minutes",
        frequency: "daily",
        status: "active",
        completed: false,
        due: new Date(),
      },
      {
        name: "Mindfulness",
        description: "Spend 5 minutes practicing mindfulness",
        frequency: "daily",
        status: "active",
        completed: false,
        due: new Date(),
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

const createHabit = async (req, res) => {
  try {
    const newHabit = await Habit.create(req.body);
    res.status(201).json(newHabit);
  } catch (err) {
    res.status(500).json({ message: "Error creating habit" });
  }
};

const updateHabit = async (req, res) => {
  try {
    const updatedHabit = await Habit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedHabit);
  } catch (err) {
    res.status(500).json({ message: "Error updating habit" });
  }
};
const deleteHabit = async (req, res) => {
  try {
    await Habit.findByIdAndDelete(req.params.id);
    res.json({ message: "Habit deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting habit" });
  }
};

export default { seed, getEntries, createHabit, updateHabit, deleteHabit };

//TODO: add to be able user authorization before doing crud
