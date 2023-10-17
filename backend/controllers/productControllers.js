const getProducts = (req, res) => {
  res.status(201).json({ message: "GET PRODUCTS" });
};

const getSingleProduct = (req, res) => {
  res.status(201).json({ message: "GET ONE PRODUCT" });
};

const addProduct = (req, res) => {
  res.status(201).json({ message: "ADD PRODUCT" });
};

const updateProduct = (req, res) => {
  res.status(201).json({ message: `UPDATED: ${req.params.id}` });
};

const deleteProduct = (req, res) => {
  res.status(201).json({ message: `DELETED: ${req.params.id}` });
};

module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
