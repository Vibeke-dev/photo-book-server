// models/User.model.js

const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  postCode: { type: Number, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true }
});

module.exports = model("User", userSchema);
