const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.port || 6000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", require("./routes/productRoutes"));

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
