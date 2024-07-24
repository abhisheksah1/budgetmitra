import incomeModel from "../models/income.model.js";
import mongoose from "mongoose";

export async function addIncome(req, res) {
  try {
    const income = new incomeModel(req.body);
    await income.save();
    res.status(200).json({
      message: "Income Added successfully",
      data: {
        user_id: income._id,
        user: income.user,
        amount: income.amount,
        source: income.source,
        date: income.date,
        createdAt: new Date(income.createdAt).toString(),
        updatedAt: new Date(income.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.error("Something went wrong in addIncome controller:", error);
    return res.status(500).json({
      message: `Something went wrong in addIncome controller: ${error}`,
    });
  }
}

export async function getAllIncomesByUserId(req, res) {
  try {
    const user = String(req.query.user); // Convert to string explicitly

    if (!user || user.trim() === "" || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(404).json({ message: "userId is Invalid" });
    }

    const incomes = await incomeModel.find({ user }).sort({ _id: -1 }); // Sort by _id in descending order

    if (!incomes || incomes.length === 0) {
      return res.status(404).json({ message: "No incomes found" });
    }

    res.status(200).json({
      message: "Incomes retrieved successfully",
      data: incomes.map((income) => ({
        income_id: income._id,
        amount: income.amount,
        source: income.source,
        date: new Date(income.date).toLocaleDateString(),
        user: income.user,
        createdAt: new Date(income.createdAt).toString(),
        updatedAt: new Date(income.updatedAt).toString(),
      })),
    });
  } catch (err) {
    console.error(
      "Something went wrong in getAllIncomesByUserId controller:",
      err
    );
    return res.status(500).json({
      message: `Something went wrong in getAllIncomesByUserId controller: ${err}`,
    });
  }
}

export async function getIncomeForLastSevenDays(req, res) {
  try {
    const user = String(req.query.user); // Convert to string explicitly

    if (!user || user.trim() === "" || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(404).json({ message: "userId is Invalid" });
    }

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const incomeData = await incomeModel
      .find({
        user,
        date: { $gte: sevenDaysAgo },
      })
      .sort({ _id: -1 });
    if (!incomeData || incomeData.length === 0) {
      return res.status(404).json({ message: "No incomes found" });
    }

    res.status(200).json({
      success: true,
      data: incomeData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
}

export async function getIncomeForLastFifteenDays(req, res) {
  try {
    const user = String(req.query.user); // Convert to string explicitly

    if (!user || user.trim() === "" || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(404).json({ message: "userId is Invalid" });
    }

    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);

    const incomeData = await incomeModel
      .find({
        user,
        date: { $gte: fifteenDaysAgo },
      })
      .sort({ _id: -1 });
    if (!incomeData || incomeData.length === 0) {
      return res.status(404).json({ message: "No incomes found" });
    }

    res.status(200).json({
      success: true,
      data: incomeData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
}

export async function getIncomeForLastMonth(req, res) {
  try {
    const user = String(req.query.user); // Convert to string explicitly

    if (!user || user.trim() === "" || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(404).json({ message: "userId is Invalid" });
    }

    const oneMonthAgo = new Date();
    oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);

    const incomeData = await incomeModel
      .find({
        user,
        date: { $gte: oneMonthAgo },
      })
      .sort({ _id: -1 });
    if (!incomeData || incomeData.length === 0) {
      return res.status(404).json({ message: "No incomes found" });
    }

    res.status(200).json({
      success: true,
      data: incomeData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
}

export async function getIncomeByDateRange(req, res) {
  try {
    const { startDate, endDate } = req.query;

    // Validate the dates
    if (!startDate || !endDate) {
      return res.status(400).json({
        success: false,
        message: "Start date and end date are required",
      });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    // Ensure dates are valid
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid date format",
      });
    }

    // Fetch data within the date range
    const incomeData = await incomeModel.find({
      date: { $gte: start, $lte: end },
    });

    res.status(200).json({
      success: true,
      data: incomeData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
}
