const express = require("express");
const bodyParser = require("body-parser");

//configurations
const { PORT } = require("./config/env-config");
const dbConnect = require("./config/db-config");

const setupAndStartServer = async () => {
  const app = express();

  dbConnect();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server Started on PORT: ${PORT}`);
  });
};

setupAndStartServer();
