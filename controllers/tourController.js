const Tour = require('./../models/tourModel');
const handleFactory = require('./handleFactory');

exports.getAllTour = handleFactory.getAll(Tour);

exports.getTour = handleFactory.getOne(Tour);

exports.createTour = handleFactory.createOne(Tour);

exports.deleteTour = handleFactory.deleteOne(Tour);

exports.updateTour = handleFactory.updateOne(Tour);
