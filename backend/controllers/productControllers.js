const GetProducts = (req, res) => {
  res.status(200).json({ message: "Get All Products" });
};

const GetSingleProduct = (req, res) => {
  res.status(200).json({
    message: "Get A Single Product",
  });
};
const AddProduct = (req, res) => {
  res.status(200).json({
    message: "Add A Product",
  });
};
const UpdateProduct = (req, res) => {
  res.status(200).json({
    message: "Update A Product",
  });
};
const DeleteProduct = (req, res) => {
  res.status(200).json({
    message: "Delete A Product",
  });
};

module.exports = {
  GetProducts,
  GetSingleProduct,
  AddProduct,
  UpdateProduct,
  DeleteProduct,
};
