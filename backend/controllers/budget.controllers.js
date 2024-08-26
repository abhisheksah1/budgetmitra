import Budget from "../models/budget.model.js";

export async function getBudget(req, res) {
  try {
    const user = req.query.user;
    const budgets = await Budget.find({ user }).sort({ _id: -1 });

    if (!budgets) {
      return res.status(404).json({ message: "Budgets not found" });
    }

    res.status(200).json({
      message: "Budgets retrieved successfully",
      data: budgets.map((budget) => ({
        _id: budget._id,
        amount: budget.amount,
        name: budget.name,
        user: budget.user,
        createdAt: new Date(budget.createdAt).toString(),
        updatedAt: new Date(budget.updatedAt).toString(),
      })),
    });
  } catch (error) {
    console.error("Error in get budget controller:", error.message);
    res.status(500).json({ message: error.message });
  }
}

export async function postBudget(req, res) {
  try {
    const newBudget = new Budget(req.body);
    await newBudget.save();
    res.status(201).json({
      message: "Budget added successfully",
      data: {
        _id: newBudget._id,
        user: newBudget.user,
        name: newBudget.name,
        amount: newBudget.amount,
        createdAt: new Date(newBudget.createdAt).toString(),
        updatedAt: new Date(newBudget.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.error("Error in post budget controller:", error.message);
    res.status(500).json({ message: error.message });
  }
}

export async function updateBudget(req, res) {
  try {
    const { id } = req.params;
    const { amountChange, operation, name } = req.body;

    // Validate input
    if (
      typeof amountChange !== "number" ||
      (operation !== "increase" && operation !== "decrease")
    ) {
      return res.status(400).json({ message: "Invalid input" });
    }

    // Find the current budget
    const currentBudget = await Budget.findById(id);
    if (!currentBudget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    // Calculate the new amount based on the operation
    let updatedAmount;
    if (operation === "increase") {
      updatedAmount = currentBudget.amount + amountChange;
    } else if (operation === "decrease") {
      updatedAmount = currentBudget.amount - amountChange;
    }

    // Update the budget with the new amount
    const updatedBudget = await Budget.findByIdAndUpdate(
      id,
      { $set: { name: name, amount: updatedAmount } },
      { new: true }
    );

    res.status(200).json({
      message: "Budget updated successfully",
      data: {
        _id: updatedBudget._id,
        user: updatedBudget.user,
        name: updatedBudget.name,
        amount: updatedBudget.amount,
        createdAt: new Date(updatedBudget.createdAt).toString(),
        updatedAt: new Date(updatedBudget.updatedAt).toString(),
      },
    });
  } catch (error) {
    console.error("Error in update budget controller:", error.message);
    res.status(500).json({ message: error.message });
  }
}

export async function deleteBudget(req, res) {
  try {
    const { id } = req.params;
    const deletedBudget = await Budget.findByIdAndDelete(id);
    if (!deletedBudget) {
      return res.status(404).json({ message: "Budget not found" });
    }
    res.status(200).json({ message: "Budget deleted successfully" });
  } catch (error) {
    console.error("Error in delete budget controller:", error.message);
    res.status(500).json({ message: error.message });
  }
}

// sum of all budget amount

export async function getTotalBudget(req, res) {
  try {
    const { user } = req.query;

    // Ensure userId is valid
    if (!user) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Fetch budgets and calculate total amount
    const budgets = await Budget.find({ user: user });

    // Check if budgets were found
    if (!budgets || budgets.length === 0) {
      return res
        .status(404)
        .json({ message: "No budgets found for this user" });
    }

    const totalAmount = budgets.reduce((sum, budget) => sum + budget.amount, 0);
    res.status(200).json({ totalAmount });
  } catch (error) {
    console.error("Error fetching total budget amount:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

//to sum of no. of budget
