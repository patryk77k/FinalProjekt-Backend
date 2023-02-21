const { findByIdAndUpdate } = require("../models/Worker");
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

const createWorker = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSingleWorker = async (req, res) => {
  const { id } = req.params;
  try {
    const worker = await Worker.findById(id);
    res.status(200).json(worker);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateWorker = async (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    last_name,
    login,
    password,
    profession,
    experience,
    availibility,
    price,
  } = req.body;
  try {
    const updatedWorker = await Worker.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        login,
        password,
        profession,
        experience,
        availibility,
        price,
      },
      { new: true }
    );
    res.status(200).json(`${updatedWorker.first_name} ist updated`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteWorker = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWorker = await Worker.findByIdAndDelete(id);
    res.status(200).json(`${deletedWorker.first_name} has been deleted`);
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
