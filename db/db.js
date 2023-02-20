const mongoose = require("mongoose");

const db = async (req, res) => {
  try {
    const URI = process.env.MONGO_URI;
    mongoose.set("strictQuery", true);
    mongoose.connect(URI);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not connect to DB");
  }
};

module.exports = db;
