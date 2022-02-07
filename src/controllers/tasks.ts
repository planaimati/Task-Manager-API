import { Application, Request, Response, NextFunction } from "express";
import { taskModel } from "../models/task";

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await taskModel.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await taskModel.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};
export const getTask = async (req: Request, res: Response) => {
  try {
    const { id: taskID } = req.params;

    const task = await taskModel.findOne({ _id: taskID });
    res.status(200).json({ task });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id: taskID } = req.params;
    const task = await taskModel.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
    });

    res.status(200).json({ task });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id: taskID } = req.params;
    const task = await taskModel.findOneAndDelete({ _id: taskID });

    res.status(200).json({ task });

    if (!task) {
      return res
        .status(404)
        .json({ msg: `Cannot find task with id: ${taskID}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
