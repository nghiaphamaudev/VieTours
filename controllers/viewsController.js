const catchAsync = require('../utils/catchAsync');

exports.getLogin = catchAsync(async (req, res, next) => {
  res.status(200).render('login', {
    title: 'Login into your account',
  });
});

exports.getAbout = catchAsync(async (req, res, next) => {
  res.status(200).render('aboutPage', {
    title: 'About we',
  });
});
exports.getRegister = catchAsync(async (req, res, next) => {
  res.status(200).render('register', {
    title: 'Register',
  });
});

exports.homePage = catchAsync(async (req, res, next) => {
  res.status(200).render('homePage', {
    title: 'Home',
  });
});
exports.destionation = catchAsync(async (req, res, next) => {
  res.status(200).render('destinationPage', {
    title: 'Destination',
  });
});
exports.hotel = catchAsync(async (req, res, next) => {
  res.status(200).render('hotelPage', {
    title: 'Hotel',
  });
});
