const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add product name"],
    },
    desc: {
      type: String,
      required: [true, "Please add product description"],
    },
    price: {
      type: String,
      required: [true, "Please add product price"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
