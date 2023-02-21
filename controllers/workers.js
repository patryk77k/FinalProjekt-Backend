const Worker = require("../models/Worker");

const getAllWorkers = async (req, res) => {
  try {
    const workers = await Worker.find();
    res.status(200).json(workers);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSingleWorker = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createWorker = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateWorker = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteWorker = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllWorkers,
  getSingleWorker,
  createWorker,
  updateWorker,
  deleteWorker,
};
