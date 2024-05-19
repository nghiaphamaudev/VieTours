const express = require('express');
const tourController = require('./../controllers/tourController');
const tourRouter = express.Router();

tourRouter
  .route('/')
  .get(tourController.getAllTour)
  .post(tourController.createTour);

tourRouter
  .route('/:id')
  .get(tourController.getTour)
  .delete(tourController.deleteTour)
  .patch(tourController.updateTour);

module.exports = tourRouter;
