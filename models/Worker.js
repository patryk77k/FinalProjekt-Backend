const mongoose = require("mongoose");

const { Schema } = mongoose;

const Worker = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
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
    // select: false,
  },
  profession: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  availibility: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  plz: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  gebuchte_termine: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("Worker", Worker);
