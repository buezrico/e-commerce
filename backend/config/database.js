const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected on  : ", connect.connection.host);
  } catch (error) {
    throw new Error(error, " failed to connect to database");
  }
};

module.exports = connectDatabase;
