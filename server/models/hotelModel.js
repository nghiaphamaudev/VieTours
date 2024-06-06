const mongoose = require('mongoose');
const hotelSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A hotel must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  address: {
    type: { type: String, default: 'Point', enum: 'Point' },
    coodinates: [Number],
    address: String,
  },
  price: {
    type: Number,
    min: [50, 'Price must have above 50$'],
    required: [true, 'Price must have not empty'],
  },
  discountPrice: {
    type: Number,
    validate: {
      validator: function (el) {
        return this.price > el;
      },
      message: 'The price must have above discount price!!',
    },
  },
  images: [String],
  imageCover: String,
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;
