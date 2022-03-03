const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const pictureSchema = new Schema({
  title: String,
  description: String,
  // email: String,
  imageUrl: String,
  user: { type: Schema.Types.ObjectId, ref: "User" }
},
{
  timestamps: {createdAt: 'dateSubmitted'}
});

module.exports = model("Picture", pictureSchema);
