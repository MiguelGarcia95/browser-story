const mongoose = require('mongoose');

const storyUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  avatar: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  since: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  places: {
    type: String,
    required: true,
  },
  likes: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
  friends: {
    type: Number,
  },
  photos: {
    type: Number,
  },
  posts: {
    type: Number,
  },
})

const StoryUser = mongoose.model('storyUser', storyUserSchema);

module.exports = StoryUser;