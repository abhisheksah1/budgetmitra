import mongoose from "mongoose";

const loanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    interestRate: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    loanProvider: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const loanModel = mongoose.model("loan", loanSchema);

export default loanModel;
