import express from "express";
import { getTaskByUser, postTask } from "../controllers/tasks.controllers.js";
const router = express.Router();


router.post('/post', postTask)
router.get('/get', getTaskByUser)

export default router;
