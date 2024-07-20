import mongoose, { Schema } from "mongoose";

const CurrencyPopupSchema = new Schema({
  isCurrencyPopup: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const CurrencyPopup = mongoose.model("CurrencyPopup", CurrencyPopupSchema);

export default CurrencyPopup;
