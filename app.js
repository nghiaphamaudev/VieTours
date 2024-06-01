const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');
const hotelRouter = require('./routes/hotelRoutes');
const viewRouter = require('./routes/viewRoutes');
const globalHandleError = require('./controllers/errorController');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'services')));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/', viewRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/hotels', hotelRouter);

app.all('*', (req, res, next) => {
  return next(
    new AppError(
      ` Can't find  ${req.originalUrl} not on this server. Try again!`,
      404
    )
  );
});

app.use(globalHandleError);
module.exports = app;
