import express from "express";
import {
  addIncome,
  getAllIncomesByUserId,
} from "../controllers/income.controllers.js";
const router = express.Router();

router.post("/post", addIncome);
router.get("/get", getAllIncomesByUserId);

export default router;
