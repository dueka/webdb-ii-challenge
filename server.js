const express = require("express");
const helmet = require("helmets");
const CarsRouter = require("./cars-dealer/cars-router");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/cars", CarsRouter);

server.get("/", (req, res) => {
  res.send("<h4>Alive </h4> ");
});

module.exports = server;
