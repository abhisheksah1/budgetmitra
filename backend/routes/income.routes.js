import express from "express";
import {
  addIncome,
  currentMonthIncome,
  deleteIncome,
  getAllIncomesByUserId,
  getIncomeByDateRange,
  getIncomeForLastFifteenDays,
  getIncomeForLastMonth,
  getIncomeForLastSevenDays,
  lastMonthIncome,
  updateIncome,
} from "../controllers/income.controllers.js";
const router = express.Router();

router.post("/post", addIncome);
router.get("/get", getAllIncomesByUserId);
router.put("/update/:id", updateIncome);
router.delete("/delete/:id", deleteIncome)
router.get("/getCurrentMonthAmount", currentMonthIncome);
router.get("/getLastMonthAmount", lastMonthIncome);
router.get("/getSevenDays", getIncomeForLastSevenDays);
router.get("/getFifteenDays", getIncomeForLastFifteenDays);
router.get("/getOneMonth", getIncomeForLastMonth);
router.get("/getDaterange", getIncomeByDateRange)


export default router;
