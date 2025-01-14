import Reset from "../models/reset.mjs";

async function seed(req, res) {
  try {
    const seedData = [
      {
        title: "monthly",
        category: "motivation",
        reflectionPrompt: "I want to be the best version of myself i want. ",
      },
      {
        title: "the sun set",
        category: "reflection",
        reflectionPrompt:
          "every time i have wish to work and be the best version of my self",
      },
      {
        title: "the sun set",
        category: "reflection",
        reflectionPrompt:
          "every time i have wish to work and be the best version of my self",
      },
    ];

    await Reset.create(seedData);

    res.status(200).send({ message: "seed data created successfully!!!!" });
  } catch (err) {
    res.status(400).send(err);
  }
}

const getEntries = async (req, res) => {
  try {
    const foundEntries = await Reset.find({});
    res.status(200).json(foundEntries);
  } catch (err) {
    res.send(err).status(400);
  }
};

export default { seed, getEntries };
