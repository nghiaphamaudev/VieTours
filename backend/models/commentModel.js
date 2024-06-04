const mongoose = require('mongoose');
const commentSchema = mongoose.Schema({
  comment: {
    type: String,
    required: [true, 'A comment must have not empty'],
  },
  postTime: Date,
  BlogId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Blog',
  },
  author: String,
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
