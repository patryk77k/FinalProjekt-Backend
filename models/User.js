const mongoose = require("mongoose");

const { Schema } = mongoose;

const User = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  task_date: {
    type: String,
    required: true,
  },
  task_size: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", User);
