import Reset from "../models/reset.mjs";

// Seed data for testing
const seed = async (req, res) => {
  try {
    const seedData = [
      {
        title: "monthly",
        category: "motivation",
        reflectionPrompt: "I want to be the best version of myself i want.",
      },
      {
        title: "the sun set",
        category: "reflection",
        reflectionPrompt:
          "every time I have a wish to work and be the best version of myself",
      },
      {
        title: "the sun set",
        category: "reflection",
        reflectionPrompt:
          "every time I have a wish to work and be the best version of myself",
      },
    ];

    await Reset.create(seedData);

    res.status(200).send({ message: "Seed data created successfully!!!!" });
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all entries
const getEntries = async (req, res) => {
  try {
    const foundEntries = await Reset.find({});
    res.status(200).json(foundEntries);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Create a new reflection entry
const createReflection = async (req, res) => {
  const { title, category, reflectionPrompt, reflectionMonth } = req.body;

  if (!title || !category || !reflectionPrompt || !reflectionMonth) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newReflection = await Reset.create({
      title,
      category,
      reflectionPrompt,
      reflectionMonth,
    });
    res.status(201).json(newReflection);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Edit an existing reflection entry
const editEntry = async (req, res) => {
  const { id } = req.params;
  const { title, category, reflectionPrompt, reflectionMonth } = req.body;

  try {
    const updatedEntry = await Reset.findByIdAndUpdate(
      id,
      { title, category, reflectionPrompt, reflectionMonth },
      { new: true }
    );
    res.status(200).json(updatedEntry);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete a reflection entry
const deleteEntry = async (req, res) => {
  const { id } = req.params;
  try {
    await Reset.findByIdAndDelete(id);
    res.status(200).send({ message: "Entry deleted successfully!" });
  } catch (err) {
    res.status(400).send(err);
  }
};
export default { seed, getEntries, createReflection, editEntry, deleteEntry };
