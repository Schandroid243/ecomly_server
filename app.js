const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
const env = process.env;

//#region Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());
//#endregion

//#region Routes
app.get("/", (req, res) => {
  return res.status(404).send("Sorry file missed !");
});

app.get("/watch/videos/:id", (req, res) => {
  return res.json({ videoId: req.params.id });
});
//#endregion

// //#region Start server
const hostName = env.HOSTNAME;
const port = env.PORT;

//#region Connect to Database
mongoose
  .connect(env.DB_CONNECTION_STRING)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.log(`The following error has occured: ${error}`);
  });
//#endregion
app.listen(port, hostName, () => {
  console.log(`Server is now running on http://${hostName}:${port}`);
});
// //#endregion
