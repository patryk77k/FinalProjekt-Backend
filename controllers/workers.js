const { findByIdAndUpdate } = require("../models/Worker");
const Worker = require("../models/Worker");

//@DEC                           get all workers
const getAllWorkers = async (req, res) => {
  const { profession, plz, address } = req.query;

  //Check if any query parameters exist
  const query = {};
  if (profession) {
    query.profession = profession;
  }
  if (plz) {
    query.plz = parseInt(plz);
  }
  if (address) {
    query.address = address;
  }

  try {
    const workers = await Worker.find(query);
    console.log(query);
    console.log(workers);
    res.status(200).json(workers);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

// const getAllWorkers = async (req, res) => {
//   const { profession, plz, address } = req.query;

//   console.log(req.query);
//   try {
//     if (!profession && !plz && !address) {
//       const workers = await Worker.find();
//       res.status(200).json(workers);
//     } else if (profession) {
//       const workers = await Worker.find({
//         profession: profession,
//       });
//       res.status(200).json(workers);
//     } else if (plz) {
//       const workers = await Worker.find({
//         plz,
//       });
//       res.status(200).json(workers);
//     } else if (address) {
//       const workers = await Worker.find({
//         address,
//       });
//       console.log(req.query);
//       res.status(200).json(workers);
//     } else if (address && plz && profession) {
//       const workers = await Worker.find({
//         profession,
//         plz,
//         address,
//       });
//       res.status(200).json(workers);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err.message);
//   }
// };

//@DEC                           Created single worker
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
    city,
  } = req.body;
  console.log(req.body);

  const userExists = await Worker.findOne({ first_name });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

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
      city,
    });
    res.status(201).json(newWorker);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

//@DEC                           Get single worker
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

//@DEC                           Update single worker
const updateWorker = async (req, res) => {
  try {
    const { id } = req.params;
    let worker = await Worker.findById(id);


    if (worker) {
      if (req.body.first_name) {
        worker.first_name = req.body.first_name;  
      }
      if (req.body.last_name) {
        worker.last_name = req.body.last_name;
      }
      if (req.body.login) {
        worker.login = req.body.login;
      }
      if (req.body.password) {
        worker.password = req.body.password;
      }
      if (req.body.profession) {
        worker.profession = req.body.profession;
      }
      if (req.body.experience) {
        worker.experience = req.body.experience;
      }
      if (req.body.availibility) {
        worker.availibility = req.body.availibility;
      }
      if (req.body.price) {
        worker.price = req.body.price;
      }
      if (req.body.address) {
        worker.address = req.body.address;
      }
      if (req.body.plz) {
        worker.plz = req.body.plz;
      }
      if (req.body.city) {
        worker.city = req.body.city;
      }
      if (req.body.gebuchte_termine) {
        worker.gebuchte_termine = [
       ...worker?.gebuchte_termine,
       ...req.body.gebuchte_termine,
     ];
      }
      

      const updatedWorker = await worker.save();
      res.status(201).json(updateWorker);
      console.log("Workder was successfuly updated!");
    }
  } catch (error) {
    console.error(error.message);
  }

  // const { id } = req.params;
  // const {
  //   first_name,
  //   last_name,
  //   login,
  //   password,
  //   profession,
  //   experience,
  //   availibility,
  //   price,
  //   address,
  //   plz,
  //   city,
  //   gebuchte_termine,
  // } = req.body;
  // try {
  //   const updatedWorker = await Worker.findByIdAndUpdate(
  //     id,
  //     {
  //       first_name,
  //       last_name,
  //       login,
  //       password,
  //       profession,
  //       experience,
  //       availibility,
  //       price,
  //       address,
  //       plz,
  //       city,
  //       gebuchte_termine,
  //     },
  //     { new: true }
  //   );
  //   res.status(200).json(`${updatedWorker.first_name} ist updated`);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send(err.message);
  // }
};

//@DEC                           Delete single worker
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
