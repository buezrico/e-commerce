const { error } = require("console");
const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
};
const addProducts = async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error(error);
  }
  const product = await Product.create({
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
  });
  res.status(200).json(product);
};
const updateProducts = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
    },
    { new: true }
  );
  res.status(200).json(updatedProduct);
};
const deleteProducts = async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  //   const products = Product.find();
  res.status(200).json({
    message: `Product Deleted Succesfully !`,
  });
};

module.exports = {
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
};
