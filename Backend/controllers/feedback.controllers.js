import Feedback from "../models/feedback.model.js";

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
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  const newFeedback = new Feedback({
    photo,
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
