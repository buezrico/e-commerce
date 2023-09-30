const mongoose = require("mongoose");
const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ products });
};

const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json({ product });
};

const addProduct = async (req, res) => {
  const data = req.body;
  const product = await Product.create({
    name: data.name,
    description: data.description,
    price: data.price,
  });

  res.status(200).json(product);
};

const updateProduct = async (req, res) => {
  const data = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: data.name,
      description: data.description,
      price: data.price,
    },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Product Updated Successfully", product: updatedProduct });
};

const deleteProduct = async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res
    .status(200)
    .json({ message: "Product Updated Successfully", product: deleteProduct });
};

module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
