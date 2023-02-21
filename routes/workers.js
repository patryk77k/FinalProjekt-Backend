const express = require("express");
const router = express.Router();
const {
  getAllWorkers,
  getSingleWorker,
  createWorker,
  updateWorker,
  deleteWorker,
} = require("../controllers/workers");

router.route("/workers").get(getAllWorkers).post(createWorker);
router
  .route("/workers/:id")
  .get(getSingleWorker)
  .put(updateWorker)
  .delete(deleteWorker);

module.exports = router;
