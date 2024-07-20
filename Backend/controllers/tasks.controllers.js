import Task from "../models/tasks.model.js";
import mongoose from "mongoose";
export async function postTask(req, res) {
  const { country, whereDidYouFindUs, usedOtherPersonalFinanceManager, user } =
    req.body;

  try {
    const newTask = new Task({
      country,
      whereDidYouFindUs,
      usedOtherPersonalFinanceManager,
      user,
    });
    await newTask.save();
    res
      .status(201)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    console.log("Something went wrong in Post Task controller", error);
    res.status(500).json({
      message: `Something went wrong in Post Task controller ${error.message}`,
    });
  }
}

export async function getTaskByUser(req, res) {
  try {
    const user = String(req.query.user);
    if (!user || user.trim() === "" || !mongoose.Types.ObjectId.isValid(user)) {
      return res.status(404).json({ message: "userId is Invalid" });
    }

    const task = await Task.findOne({ user });

    if (!task || task.length === 0) {
      return res.status(404).json({ message: "No task found" });
    }
    res.status(200).json({
      message: "Task Retrived successfully",
      data: {
        _id: task._id,
        country: task.country,
      },
    });
  } catch (error) {
    console.log("Something went wrong in Get Task by user controller", error);
    res.status(500).json({
      message: `Something went wrong in get Task by user controller ${error.message}`,
    });
  }
}
