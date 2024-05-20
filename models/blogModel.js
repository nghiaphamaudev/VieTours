const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A blog must have a title'],
  },
  summary: {
    type: String,
    required: [true, 'A blog must have a title'],
  },
  description: {
    type: String,
    required: true,
  },
  images: [String],
  imageCover: String,
  author: String,
  nLikes: Number,
  nComments: Number,
  postTime: Date,
  published: Boolean,
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
