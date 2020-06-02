require("dotenv").config();

// remove this once you confirm it works

// like, seriously. go delete that!

// EVERYTHING ELSE

const { PORT = 3000 } = process.env;
const express = require("express");
const server = express();

const { client } = require("./db");
client.connect();

const bodyParser = require("body-parser");
server.use(bodyParser.json());

const morgan = require("morgan");
server.use(morgan("dev"));

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const apiRouter = require("./API");
server.use("/api", apiRouter);

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
