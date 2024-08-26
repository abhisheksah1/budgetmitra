import express from "express";
import {
  deleteBudget,
  getBudget,
  getTotalBudget,
  postBudget,
  updateBudget,
} from "../controllers/budget.controllers.js";
const router = express.Router();

router.get("/get", getBudget);
router.post("/post", postBudget);
router.put("/update/:id", updateBudget);
router.delete("/delete/:id", deleteBudget);
router.get('/getTotal', getTotalBudget);

export default router;
