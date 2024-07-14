import express from "express";
import {
  addExpenses,
  getAllExpensesByUserId,
} from "../controllers/expenses.controllers.js";
const router = express.Router();

router.post("/post", addExpenses);
router.get("/get", getAllExpensesByUserId);

export default router;
