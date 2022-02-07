import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

console.log(mongoose.model('Task', TaskSchema));


export const taskModel = mongoose.model('Task', TaskSchema)
