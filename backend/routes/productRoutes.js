const express = require("express");
const router = express.Router();
const {
  GetProducts,
  AddProduct,
  UpdateProduct,
  DeleteProduct,
  GetSingleProduct,
} = require("../controllers/productControllers");

router.route("/").get(GetProducts).post(AddProduct);
router
  .route("/:id")
  .get(GetSingleProduct)
  .put(UpdateProduct)
  .delete(DeleteProduct);

module.exports = router;
