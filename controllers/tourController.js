const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const sendResponse = require('../utils/sendResponse');
const Tour = require('./../models/tourModel');

exports.getAllTour = catchAsync(async (req, res, next) => {
  const tours = await Tour.find().select('-createdAt -__v');
  sendResponse(res, 200, tours);
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);
  sendResponse(res, 200, tour);
});

exports.createTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.create(req.body);
  sendResponse(res, 201, tour);
});

exports.deleteTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);
  if (!tour) {
    return next(new AppError('The tour not existed. Try again!!', 404));
  }
  sendResponse(res, 204);
});

exports.updateTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!tour) {
    return next(new AppError('The tour not existed. Try again!!', 404));
  }
  sendResponse(res, 200, tour);
});
