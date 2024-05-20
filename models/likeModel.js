const mongoose = require('mongoose');
const likeSchema = mongoose.Schema({
  likeTime: Date,
  BlogId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Blog',
  },
  author: String,
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;
