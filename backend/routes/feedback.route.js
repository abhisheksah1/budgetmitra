import express from "express";
import multer from "multer";
import path from "path";
import { getFeedback, postFeedback } from "../controllers/feedback.controllers.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get('/get', getFeedback);
router.post('/post', upload.single('photo'), postFeedback); // Apply multer middleware here

export default router;
