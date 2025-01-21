import express from "express";
const router = express.Router();

import budgetController from "../controllers/budget.mjs";

//!take this out when you done with have seeds

router.get("/seed", budgetController.seed);

//? i think it should get the month of income and exensive

router.get("/", budgetController.getEntries);

// TODO: POST new entry
// TODO: get  chart of all of income
// TODO: get all the expensive
// TODO: get the remainer of income - expensice
// TODO: be able to use the remain to use as saving, spending for fun
// TODO: edit
// TODO: delete
//TODO: add to be able user authorization before doing crud by using the middleware protection

export default router;
