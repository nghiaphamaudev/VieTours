const mongoose = require('mongoose');
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'Tour must have a name !'],
      minlength: [10, 'A tour name must have less or equal then 40 characters'],
    },
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration !'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a maxGroupSize !'],
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
      validate: {
        validator: function (el) {
          return el > 50;
        },
        message: 'The price have must greater than 50$',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },

    priceDiscount: {
      type: Number,
      validate: {
        validator: function (promotionPrice) {
          return this.price > promotionPrice;
        },
        message: 'The price must priceDiscount above price',
      },
    },

    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a description'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: String,

    images: [String],

    startDates: [Date],

    startLocation: {
      type: { type: String, default: 'Point', enum: ['Point'] },
      coordinates: [Number],
      address: String,
      description: String,
    },

    locations: [
      {
        type: { type: String, default: 'Point', enum: ['Point'] },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
  },
  {
    timestamps: true,
    __v: false,
    //nhưng áp dụng khi bạn chuyển đổi một tài liệu Mongoose thành JSON thông qua phương thức toJSON(). Khi virtuals: true, các trường "ảo" cũng sẽ được bao gồm trong kết quả JSON.
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Tour = mongoose.model('tours', tourSchema);
module.exports = Tour;
