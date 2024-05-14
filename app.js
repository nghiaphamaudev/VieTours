const express = require('express');
const morgan = require('morgan');
const path = require('path');

const AppError = require('./utils/appError');
const userRouter = require('./routes/userRoutes');
const globalHandleError = require('./controllers/errorController');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(
    new AppError(
      ` Can't find  ${req.originalUrl} not on this server. Try again!`,
      404
    )
  );
});

app.use(globalHandleError);
module.exports = app;
