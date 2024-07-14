import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    whereDidYouFindUs: {
      type: String,
      required: true,
      enum: [
        "Social Media",
        "Search Engine",
        "Referral",
        "Advertisement",
        "Other",
      ],
    },
    usedOtherPersonalFinanceManager: {
      type: Boolean,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", tasksSchema);

export default Task;
