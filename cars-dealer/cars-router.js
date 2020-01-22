const express = require("express");
const {
  getAllCars,
  getAllCarsById,
  insertCars,
  insertCarsById,
  deleteCarsById
} = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allCars = await getAllCars();
    res.json(allCars);
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getCarId = await getAllCarsById(req.params.id);
    res.json(getCarId);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const { vin, make, model, mileage } = req.body;
    const id = await insertCars({
      vin,
      make,
      model,
      mileage
    });
    res.json({ message: `Account with id ${id} has been created` });
  } catch (e) {
    console.log(e);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { vin, make, model, mileage } = req.body;
  try {
    const count = await insertCarsById({ vin, make, model, mileage });
    res.json({ message: `${count} Account has been updated` });
  } catch (e) {
    console.log(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await deleteCarsById(req.params.id);
    res.json({
      message: `${count} Account has been deleted`
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
