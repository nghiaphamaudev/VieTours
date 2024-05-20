const mongoose = require('mongoose');
const reviewSchema = mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'A review can not empty'],
    },
    rating: {
      type: Number,
      required: false,
      default: 4.5,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
    __v: false,
  }
);

const Review = mongoose.model('review', reviewSchema);
module.exports = Review;
