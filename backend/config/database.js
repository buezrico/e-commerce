const mongoose = require("mongoose");

const connect_db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URL);

    console.log(`Database connected on ${connect.connection.host}`);
  } catch (error) {
    throw new Error(error, "Failed to connect to database");
  }
};

module.exports = connect_db;
