const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: [true, "item name required"],
    maxlength: 50,
  },
  description: {
    type: String,
    required: [true, "item name required"],
  },
});

module.exports = mongoose.model("items", itemSchema);
