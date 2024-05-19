const AppError = require('../utils/appError');
const User = require('./../models/userModel');
const catchAsync = require('../utils/catchAsync');
const sendResponse = require('../utils/sendResponse');

exports.getAllUser = catchAsync(async (req, res, next) => {
  const users = await User.find();
  sendResponse(res, 200, users);
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return next(new AppError('The ID user not existed', 400));
  }
  sendResponse(res, 204);
});

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

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  sendResponse(res, 200, user);
});
