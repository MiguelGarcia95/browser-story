const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// const scoreSchema = new mongoose.Schema({storyId: String, gKarma: String, bKarma: String});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  theme: {
    type: String,
    default: 'light',
    trim: true,
  },
  // scores: {
  //   type: [scoreSchema],
  //   default: undefined
  // }
})

// bcrypt password during save

userSchema.pre('save', async function(next) {
  const user = this;

  if (user.isModified || user.isNew) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;