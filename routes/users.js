const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
