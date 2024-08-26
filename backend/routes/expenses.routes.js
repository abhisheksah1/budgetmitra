import express from "express";
import {
  addExpenses,
  currentMonthExpenses,
  getAllExpensesByCategory,
  getAllExpensesByCategoryAndFindLength,
  getAllExpensesByUserId,
  getExpencesForLastFifteenDays,
  getExpencesForLastMonth,
  getExpencesForLastSevenDays,
  lastMonthExpenses,
} from "../controllers/expenses.controllers.js";
const router = express.Router();

router.post("/post", addExpenses);
router.get("/get", getAllExpensesByUserId);
router.get("/getByCategory", getAllExpensesByCategory);
router.get(
  "/getByCategoryAndFindLength",
  getAllExpensesByCategoryAndFindLength
);
router.get("/getCurrentMonthAmount", currentMonthExpenses)
router.get("/getLastMonthAmount", lastMonthExpenses);
router.get("/getSevenDays", getExpencesForLastSevenDays);
router.get("/getFifteenDays", getExpencesForLastFifteenDays);
router.get("/getOneMonth", getExpencesForLastMonth);

export default router;
