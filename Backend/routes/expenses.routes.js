import express from "express";
import {
  addExpenses,
  getAllExpensesByUserId,
  getExpencesForLastFifteenDays,
  getExpencesForLastMonth,
  getExpencesForLastSevenDays,
} from "../controllers/expenses.controllers.js";
const router = express.Router();

router.post("/post", addExpenses);
router.get("/get", getAllExpensesByUserId);
router.get("/getSevenDays", getExpencesForLastSevenDays);
router.get("/getFifteenDays", getExpencesForLastFifteenDays);
router.get("/getOneMonth", getExpencesForLastMonth);

export default router;
