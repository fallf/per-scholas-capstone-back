import Budget from "../models/budget.mjs";

async function seed(req, res) {
  const DATE_TRANS = new Date();

  try {
    const seedData = [
      {
        amount: 500,
        category: "Rent",
        entryDate: DATE_TRANS,
        description: "i got a good deal",
        status: "Expense",
      },
      {
        amount: 250,
        category: "Food",
        entryDate: DATE_TRANS,
        description: "i will be meal prep",
        status: "Expense",
      },
      {
        amount: 2000,
        category: "Salary",
        entryDate: DATE_TRANS,
        description: "money is money",
        status: "Income",
      },
      {
        amount: 150,
        category: "Utilities",
        entryDate: DATE_TRANS,
        description: "electricity its hot",
        status: "Expense",
      },
    ];

    await Budget.create(seedData);
    res.status(200).send({ message: "seed data created successfully!!" });
  } catch (err) {
    res.status(400).send(err);
  }
}
const getEntries = async (req, res) => {
  try {
    const foundEntries = await Budget.find({});
    res.status(200).json(foundEntries);
  } catch (err) {
    res.send(err).status(400);
  }
};

export default { seed, getEntries };
