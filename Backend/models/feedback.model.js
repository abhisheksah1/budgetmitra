import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  photo: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  thought: { type: String, required: true },
});

const feedbackModel = mongoose.model("feedback", feedbackSchema);

export default feedbackModel;
