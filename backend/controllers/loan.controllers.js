import loanModel from "../models/loan.model.js";

import mongoose from "mongoose";

export async function addLoans(req, res) {
  try {
    const loan = new loanModel(req.body);
    await loan.save();
    res.status(200).json({
      message: "Income Added successfully",
      data: {
        loan_id: loan._id,
        user: loan.user,
        amount: loan.amount,
        interestRate: loan.interestRate,
        date: loan.date,
        category: loan.category,
        loanProvider: loan.loanProvider,
        createdAt: new Date(loan.createdAt).toString(),
        updatedAt: new Date(loan.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.error("Something went wrong in addLoan controller:", error);
    return res.status(500).json({
      message: `Something went wrong in addLoan controller: ${error}`,
    });
  }
}

export async function getAllLoansByUserId(req, res) {
  try {
    const user = String(req.query.user); // Convert to string explicitly

    if (!user || user.trim() === "" || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(404).json({ message: "userId is Invalid" });
    }

    const loans = await loanModel.find({ user }).sort({ _id: -1 }); // Sort by _id in descending order

    if (!loans || loans.length === 0) {
      return res.status(404).json({ message: "No loans found" });
    }

    res.status(200).json({
      message: "Loans retrieved successfully",
      data: loans.map((loan) => ({
        _id: loan._id,
        amount: loan.amount,
        category: loan.category,
        interestRate: loan.interestRate,
        loanProvider: loan.loanProvider,
        date: new Date(loan.date).toLocaleDateString(),
        user: loan.user,
        createdAt: new Date(loan.createdAt).toString(),
        updatedAt: new Date(loan.updatedAt).toString(),
      })),
    });
  } catch (err) {
    console.error(
      "Something went wrong in getAllLoansByUserId controller:",
      err
    );
    return res.status(500).json({
      message: `Something went wrong in getAllLoansByUserId controller: ${err}`,
    });
  }
}
