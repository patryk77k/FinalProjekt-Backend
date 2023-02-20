require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const db = require("./db/db");
const usersRouter = require("./routes/users");

app.use(cors());
db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", usersRouter);

app.get("/users", (req, res) => {
  res.send("Hello from Backend");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
