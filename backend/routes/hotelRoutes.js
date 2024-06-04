const express = require('express');
const hotelController = require('./../controllers/hotelController');
const hotelRouter = express.Router();

hotelRouter
  .route('/')
  .get(hotelController.getHotel)
  .post(hotelController.createHotel);

hotelRouter
  .route('/:id')
  .get(hotelController.getHotel)
  .delete(hotelController.deleteHotel)
  .patch(hotelController.updateHotel);

module.exports = hotelRouter;
