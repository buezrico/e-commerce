const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/productControllers");

router.route("/").get(getProducts).post(addProducts);
router.route("/:id").put(updateProducts).delete(deleteProducts);

module.exports = router;
