const getProducts = (req, res) => {
  res.json({ message: "GET PRODUCTS" });
};
const addProducts = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add Text");
  }
  res.status(200).json({ message: "ADD PRODUCTS", content: req.body.text });
};
const updateProducts = (req, res) => {
  res.status(200).json({ message: "UPDATE PRODUCTS" });
};
const deleteProducts = (req, res) => {
  res.status(200).json({ message: "DELETE PRODUCTS" });
};

module.exports = {
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
};
