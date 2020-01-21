const db = require("../dbConfig");

function getAllCars() {
  return db("cars");
}

function getAllCarsById(id) {
  return db("cars")
    .where({ id })
    .first();
}

function insertCars({ vin, make, model, mileage }) {
  return db("cars").insert({ vin, make, model, mileage });
}

function insertCarsById({ vin, make, model, mileage }) {
  return db("cars")
    .where({ id })
    .update({ vin, make, model, mileage });
}

function deleteCarsById(id) {
  return db("cars")
    .where({ id })
    .del();
}

module.exports = {
  getAllCars,
  getAllCarsById,
  insertCars,
  insertCarsById,
  deleteCarsById
};
