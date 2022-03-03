const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String
  
});

module.exports = model("Task", taskSchema);
