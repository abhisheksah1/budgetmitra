import mongoose from "mongoose";
import Expenses from "../models/expenses.model.js";

export async function addExpenses(req, res) {
  try {
    const expense = new Expenses(req.body);
    await expense.save();
    res.status(200).json({
      message: "Expenses added successfully",
      data: {
        user_id: expense._id,
        amount: expense.amount,
        category: expense.category,
        description: expense.description,
        date: expense.date,
        reason: expense.reason,
      },
    });
  } catch (error) {
    console.log("Something went wrong in adding expense controller", error);
    res.status(500).json({
      message: `Something went wrong in adding expense controller ${error.message}`,
    });
  }
}

export async function getAllExpensesByUserId(req, res) {
  try {
    const user = String(req.query.user); // Convert to string explicitly

    if (!user || user.trim() === "" || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(404).json({ message: "userId is Invalid" });
    }

    const expenses = await Expenses.find({ user }).sort({ _id: -1 }); // Sort by _id in descending order

    if (!expenses || expenses.length === 0) {
      return res.status(404).json({ message: "No expenses found" });
    }

    res.status(200).json({
      message: "Expenses retrieved successfully",
      data: expenses.map((expense) => ({
        _id: expense._id,
        amount: expense.amount,
        reason: expense.reason,
        date: new Date(expense.date).toLocaleDateString(),
        user: expense.user,
        category: expense.category,
        createdAt: new Date(expense.createdAt).toString(),
        updatedAt: new Date(expense.updatedAt).toString(),
      })),
    });
  } catch (error) {
    console.log(
      "Something went wrong in getAllExpensesByUserId controller:",
      error
    );
    res.status(500).json({
      message: `Something went wrong in getAllExpensesByUserId controller: ${error.message}`,
    });
  }
}

export async function getExpencesForLastSevenDays(req, res) {
  try {
    const user = String(req.query.user); // Convert to string explicitly

    if (!user || user.trim() === "" || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(404).json({ message: "userId is Invalid" });
    }

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const expencesData = await Expenses.find({
      user,
      date: { $gte: sevenDaysAgo },
    }).sort({ _id: -1 });
    if (!expencesData || expencesData.length === 0) {
      return res.status(404).json({ message: "No expences found" });
    }

    res.status(200).json({
      success: true,
      data: expencesData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
}

export async function getExpencesForLastFifteenDays(req, res) {
  try {
    const user = String(req.query.user); // Convert to string explicitly

    if (!user || user.trim() === "" || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(404).json({ message: "userId is Invalid" });
    }

    const fifteenDaysAgo = new Date();
    fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);

    const expencesData = await Expenses.find({
      user,
      date: { $gte: fifteenDaysAgo },
    }).sort({ _id: -1 });
    if (!expencesData || expencesData.length === 0) {
      return res.status(404).json({ message: "No expences found" });
    }

    res.status(200).json({
      success: true,
      data: expencesData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
}

export async function getExpencesForLastMonth(req, res) {
  try {
    const user = String(req.query.user); // Convert to string explicitly

    if (!user || user.trim() === "" || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(404).json({ message: "userId is Invalid" });
    }

    const oneMonthAgo = new Date();
    oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);

    const expencesData = await Expenses.find({
      user,
      date: { $gte: oneMonthAgo },
    }).sort({ _id: -1 });
    if (!expencesData || expencesData.length === 0) {
      return res.status(404).json({ message: "No expences found" });
    }

    res.status(200).json({
      success: true,
      data: expencesData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
}
