import Goal from "../models/goal.mjs";

async function seed(req, res) {
  const TODAY = new Date();
  try {
    const seedData = [
      {
        title: "Get a job",
        description:
          "I want a high paying software engineering job byt the end of winter",
        status: "In-progress",
        due: TODAY,
      },
      {
        title: "body-recom",
        description: "Have 32 bust, 24-inch waist, hip 40, 38 inch no less",
        status: "Pending",
        due: TODAY,
      },
      {
        title: "start vlogging",
        description: "start filming myself and upload it on youtube",
        status: "Completed",
        due: TODAY,
      },
    ];
    await Goal.create(seedData);
    res.status(200).send({ message: "seed data created successfully!!" });
  } catch (err) {
    res.send(err).status(400);
  }
}
const getEntries = async (req, res) => {
  try {
    const foundEntries = await Goal.find({});
    res.status(200).json(foundEntries);
  } catch (err) {
    res.send(err).status(400);
  }
};

export default { seed, getEntries };
