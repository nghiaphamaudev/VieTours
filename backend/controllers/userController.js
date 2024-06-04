const AppError = require('../utils/appError');
const User = require('./../models/userModel');
const catchAsync = require('../utils/catchAsync');
const sendResponse = require('../utils/sendResponse');
const handleFactory = require('./handleFactory');

exports.getAllUser = handleFactory.getAll(User);

exports.deleteUser = handleFactory.deleteOne(User);

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findOneAndUpdate(req.user.id, { active: false });
  sendResponse(res, 204);
});

const filterUpdateFields = (objectBody, ...allowFields) => {
  const newObj = {};
  Object.values(objectBody).forEach((el) => {
    if (allowFields.includes(el)) newObj[el] = objectBody[el];
  });
  return newObj;
};

exports.updateMe = catchAsync(async (req, res, next) => {
  const filtedBody = filterUpdateFields(req.body, 'email', 'fullName');
  const update = await User.findByIdAndUpdate(req.user.id, filtedBody, {
    new: true,
    runValidators: true,
  });
  sendResponse(res, 200, update);
});

exports.getMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

exports.getUser = handleFactory.getOne(User);
