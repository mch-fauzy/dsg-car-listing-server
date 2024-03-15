const express = require('express');
const carRouter = express.Router();
const { CarController } = require('../../controllers')

carRouter.get('/cars', CarController.getCars);
carRouter.post('/cars', CarController.insertCar);
carRouter.delete('/cars/:id', CarController.deleteCarById);
carRouter.put('/cars/:id', CarController.updateCarById);

module.exports = carRouter;
