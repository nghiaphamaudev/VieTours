const AppError = require('../utils/appError');

const handleValidatorError = (error) => {
  const errors = Object.values(error.errors).map((el) => el.message);
  const message = errors.join('. ');
  return new AppError(message, 400);
};

const handleDuplicateDB = (error) => {
  // const value = error.errorResponse.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const valueDuplicate = error.errorResponse.keyValue;
  let values = Object.getOwnPropertyNames(valueDuplicate);
  values = values.map((value) =>
    value.replace(value[0], value[0].toUpperCase())
  );
  values = values.join(' ');
  const message = `${values} đã tồn tại .Vui lòng thử lại!`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, req, res) => {

  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const sendErrorProd = (err, req, res) => {
  if (res.headersSent) {
    return;
  }
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong!!',
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;
    if (err.name === 'ValidationError') error = handleValidatorError(error);
    if (err.code === 11000) error = handleDuplicateDB(error);
    sendErrorProd(error, req, res);
  }
};
