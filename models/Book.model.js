const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  picture: [{ type: Schema.Types.ObjectId, ref: "Picture" }],
  price: Number,
  theme: String
},
{
  timestamps: {createdAt: 'dateSubmitted'}
});

module.exports = model("Book", taskSchema);
