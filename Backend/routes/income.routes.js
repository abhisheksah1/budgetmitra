import express from "express";
import {
  addIncome,
  getAllIncomesByUserId,
  getIncomeByDateRange,
  getIncomeForLastFifteenDays,
  getIncomeForLastMonth,
  getIncomeForLastSevenDays,
} from "../controllers/income.controllers.js";
const router = express.Router();

router.post("/post", addIncome);
router.get("/get", getAllIncomesByUserId);
router.get("/getSevenDays", getIncomeForLastSevenDays);
router.get("/getFifteenDays", getIncomeForLastFifteenDays);
router.get("/getOneMonth", getIncomeForLastMonth);
router.get("/getDaterange", getIncomeByDateRange)


export default router;
