const express = require("express");
const { registerUser, loginUser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
// router.post("/me", getUser);

module.exports = router;
