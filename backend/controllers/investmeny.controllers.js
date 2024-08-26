import InvestmentModel from "../models/investment.model";
import mongoose from "mongoose";

export async function addInvestment(req, res) {
  try {
    const investment = new InvestmentModel(req.body);
    await investment.save();
    res.status(200).json({
      message: "Investment added successfully",
      data: {
        investment_id: investment._id,
        amount: investment.amount,
        cetagory: investment.cetagory,
        date: investment.date,
        riskLevel: investment.riskLevel,
        returnRate: investment.returnRate,
        createdAt: new Date(investment.createdAt).toString(),
        updatedAt: new Date(investment.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}



 export async function getAllInvestmentByUserId(){

  const user = String(req.query.user);

  if(!user|| user.trim() ==="" || !mongoose.Types.ObjectId.isValid(user)){
    return res.status(404).json({ message: "User not Found" });

  }

  

}