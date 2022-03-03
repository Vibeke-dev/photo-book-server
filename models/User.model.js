// models/User.model.js

const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: false },
  postCode: { type: Number, required: false },
  city: { type: String, required: false },
  country: { type: String, required: false }
});

module.exports = model("User", userSchema);
