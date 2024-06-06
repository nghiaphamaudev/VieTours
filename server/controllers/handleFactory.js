const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const sendResponse = require('../utils/sendResponse');

exports.getAll = (doc) => {
  return catchAsync(async (req, res, next) => {
    const data = await doc.find();
    sendResponse(res, 200, data);
  });
};

exports.getOne = (doc) => {
  return catchAsync(async (req, res, next) => {
    const data = await doc.findById(req.params.id);
    if (!data) {
      return next(new AppError('The ID document not existed'));
    }
    sendResponse(res, 200, data);
  });
};

exports.deleteOne = (doc) => {
  return catchAsync(async (req, res, next) => {
    const data = await doc.findByIdAndDelete(req.params.id);
    if (!data) {
      return next(new AppError('The ID document not existed'));
    }
    sendResponse(res, 204);
  });
};

exports.updateOne = (doc) => {
  return catchAsync(async (req, res, next) => {
    const data = await doc.findByIdAndUpdate(req.params.id, req.body);
    if (!data) {
      return next(new AppError('The ID document not existed'));
    }
    sendResponse(res, 200, data);
  });
};

exports.createOne = (doc) => {
  return catchAsync(async (req, res, next) => {
    const data = await doc.create(req.body);
    sendResponse(res, 200, data);
  });
};
