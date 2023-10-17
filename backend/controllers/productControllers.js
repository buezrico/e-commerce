const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(201).json({ products });
};

const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(201).json({ product });
};

const addProduct = async (req, res) => {
  if (!req.body.name || !req.body.price) {
    res.status(400);
    throw new Error("please add product");
  }

  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
  });

  res.status(201).json(product);
};

const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(201).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.status(201).json({ Deleted_Product: deletedProduct });
};

module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
