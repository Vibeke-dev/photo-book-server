const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const pictureSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  purchased: { type: String, default: 'no' },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  isSelected: { type: Boolean, default: false },
  numberInBook: {type: Number, default: 0}
},
{
  timestamps: {createdAt: 'dateSubmitted'}
});

module.exports = model("Picture", pictureSchema);
