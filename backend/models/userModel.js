const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add user name"],
  },
  email: {
    type: String,
    required: [true, "please add user email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please add user password"],
  },
});

module.exports = mongoose.model("User", userSchema);
