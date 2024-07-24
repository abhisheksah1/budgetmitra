import CurrencyPopup from "../models/currencyPopup.model.js";

export async function getCurrencyPopup(req, res) {
  try {
    const user = req.query.user;
    const currencyPopup = await CurrencyPopup.findOne({ user });

    if (!currencyPopup) {
      return res.status(404).json({ message: "CurrencyPopup not found" });
    }

    res.status(200).json(currencyPopup);
  } catch (error) {
    console.error("Error in getCurrencyPopup:", error.message);
    res.status(500).json({ message: error.message });
  }
}

export async function postCurrencyPopup(req, res) {
  try {
    const currencyPopup = new CurrencyPopup(req.body);
    await currencyPopup.save();
    res.status(201).json({
      message: "CurrencyPopup added successfully",
      data: {
        id: currencyPopup._id,
      },
    });
  } catch (error) {
    console.error("Error in postCurrencyPopup:", error.message);
    res.status(500).json({ message: error.message });
  }
}

export async function updateCurrencyPopup(req, res) {
  try {
    const { id } = req.params;
    const currencyPopup = await CurrencyPopup.findByIdAndUpdate(
      id,
      {
        isCurrencyPopup: req.body.isCurrencyPopup || false,
      },
      {
        new: true,
      }
    );

    if (!currencyPopup) {
      return res.status(404).json({ message: "CurrencyPopup not found" });
    }

    res.status(200).json(currencyPopup);
  } catch (error) {
    console.error("Error in updateCurrencyPopup:", error.message);
    res.status(500).json({ message: error.message });
  }
}
