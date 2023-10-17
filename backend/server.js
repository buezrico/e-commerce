const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDatabase = require("./config/database");
const port = process.env.port || 5000;
const app = express();

connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", require("./routes/productRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: ${port}`));
