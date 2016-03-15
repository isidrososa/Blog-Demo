var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  abstract: {
    type: String,
    trim: true
  },
  body: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: Number,
    default: 1,
    trim: true
  },
  likes: {
    type: Number,
    defualt: 0,
    trim: true
  }
});

module.exports = mongoose.model('Article', ArticleSchema);
