const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email !'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  fullName: {
    type: String,
    required: [true, 'Please provide your full name'],
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'guide', 'lead-guide'],
    default: 'user',
  },
  password: {
    type: String,
    minlength: 8,
    select: false,
    required: [true, 'Please provide your password'],
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please provide your password confirm'],
    validate: {
      validator: function (el) {
        return this.password === el;
      },
      message: 'The password confirm not same password. Try again!',
    },
  },
  passwordChangedAt: Date,
  passwordRefreshToken: String,
  passwordRefreshTokenExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.checkPassword = async function (password, userPassword) {
  return await bcrypt.compare(password, userPassword);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
