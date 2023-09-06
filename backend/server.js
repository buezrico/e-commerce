const express = require("express");
const router = require("./routes/productRoutes");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

connectDatabase();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", require("./routes/productRoutes"));

app.listen(port, () => console.log(`server running on port: ${port}`));