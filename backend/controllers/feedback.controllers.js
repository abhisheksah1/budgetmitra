import Feedback from "../models/feedback.model.js";
import cloudinary from "cloudinary";

export async function getFeedback(req, res) {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function postFeedback(req, res) {
  const { name, position, company, thought } = req.body;
  // const photo = req.file ? `/uploads/${req.file.filename}` : null;

  const imagePath = await cloudinary.v2.uploader.upload(req.file.path);

  const newFeedback = new Feedback({
    photo: imagePath.secure_url,
    name,
    position,
    company,
    thought,
  });

  try {
    const savedFeedback = await Feedback.create(newFeedback);
    res.status(201).json(savedFeedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
