import express from "express";
import {
  getCurrencyPopup,
  postCurrencyPopup,
  updateCurrencyPopup,
} from "../controllers/currencyPopup.controllers.js";
const router = express.Router();

router.get("/get", getCurrencyPopup);
router.post("/post", postCurrencyPopup);
router.put("/put/:id", updateCurrencyPopup);

export default router;
