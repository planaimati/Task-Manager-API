import express from "express";

import {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
} from "../controllers/tasks";

export const router = express.Router();

router.route("/").get(getAllTasks);

router.route("/").post(createTask);

router.route("/:id").get(getTask);

router.route("/:id").patch(updateTask);

router.route("/:id").delete(deleteTask);
