const mongoose = require("mongoose");

const { DB_URI } = require("./env-config");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log(`MongoDB connected on ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports = dbConnect;
