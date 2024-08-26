import express from "express";
import {
  addLoans,
  getAllLoansByUserId,
} from "../controllers/loan.controllers.js";
const router = express.Router();

router.post("/post", addLoans);
router.get("/get", getAllLoansByUserId);

export default router;
