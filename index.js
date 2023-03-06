const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const db = require("./db/db");
const usersRouter = require("./routes/users");
const workersRouter = require("./routes/workers");

app.use(cors());
db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", usersRouter);
app.use("/workers", workersRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
