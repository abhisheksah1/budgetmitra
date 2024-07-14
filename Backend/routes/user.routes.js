import express from "express";
import { forgetPassword, getUser, login, register, resetPassword } from "../controllers/user.controllers.js";
const router = express.Router();

router.post ("/register", register)
router.post("/login",login);
router.get("/:id", getUser);
router.post("/forgotPassword", forgetPassword);
router.put("/resetPassword/:token", resetPassword);


export default router;
