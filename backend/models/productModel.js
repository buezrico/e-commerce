const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add product name"],
  },
  price: {
    type: Number,
    required: [true, "Please add product price"],
  },
});

module.exports = mongoose.model("Product", productSchema);
