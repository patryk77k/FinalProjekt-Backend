const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createUser = async (req, res) => {
  const {
    first_name,
    last_name,
    address,
    login,
    password,
    task_date,
    task_size,
  } = req.body;
  try {
    const newUser = await User.create({
      first_name,
      last_name,
      address,
      login,
      password,
      task_date,
      task_size,
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    first_name,
    last_name,
    address,
    login,
    password,
    task_date,
    task_size,
  } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        address,
        login,
        password,
        task_date,
        task_size,
      },
      { new: true }
    );
    res.status(200).json(`${updatedUser.first_name} ist updated`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json(`${deletedUser.first_name} has been deleted`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};
module.exports = {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
