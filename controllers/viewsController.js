const catchAsync = require('../utils/catchAsync');

exports.getLogin = catchAsync(async (req, res, next) => {
  console.log(res.locals.user);
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
    title: 'About we',
  });
});
