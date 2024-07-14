import moongoose from "mongoose";

const investmentSchema = new moongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: Number,
      required: true,
    },
    cetagory: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    returnRate: {
      type: Number,
    },
    riskLevel: {
      type: String,

      enum: ["low", "medium", "high"],
    },
  },
  {
    timestamps: true,
  }
);

const InvestmentModel = mongoose.model("Investment", investmentSchema);

export default InvestmentModel;
