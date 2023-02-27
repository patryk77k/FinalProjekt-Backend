const { findByIdAndUpdate } = require("../models/Worker");
const Worker = require("../models/Worker");

const getAllWorkers = async (req, res) => {
  const { profession, plz, address } = req.query;
  console.log(req.query);
  try {
    if (!profession && !plz && !address) {
      const workers = await Worker.find();
      res.status(200).json(workers);
    } else if (profession) {
      const workers = await Worker.find({
        profession,
      });
      res.status(200).json(workers);
    } else if (plz) {
      const workers = await Worker.find({
        plz,
      });
      res.status(200).json(workers);
    } else if (address) {
      const workers = await Worker.find({
        address,
      });
      console.log(req.query);
      res.status(200).json(workers);
    } else if (address && plz && profession) {
      const workers = await Worker.find({ profession, plz, address });
      res.status(200).json(workers);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createWorker = async (req, res) => {
  const {
    first_name,
    last_name,
    login,
    password,
    profession,
    experience,
    availibility,
    price,
    plz,
    address,
  } = req.body;
  console.log(req.body);

  try {
    const newWorker = await Worker.create({
      first_name,
      last_name,
      login,
      password,
      profession,
      experience,
      availibility,
      price,
      plz,
      address,
    });
    res.status(201).json(newWorker);
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
