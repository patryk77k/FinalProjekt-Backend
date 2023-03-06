const express = require("express");
const router = express.Router();
const {
  getAllWorkers,
  getSingleWorker,
  createWorker,
  updateWorker,
  deleteWorker,
} = require("../controllers/workers");

router.route("/").get(getAllWorkers).post(createWorker);
router
  .route("/:id")
  .get(getSingleWorker)
  .put(updateWorker)
  .delete(deleteWorker);

module.exports = router;
