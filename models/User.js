const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
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
  }
})

// bcrypt password during save
userSchema.pre('save', async function(next) {
  const user = this;

  if (user.isModified || user.isNew) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

// Create Token
userSchema.methods.createAuthToken = async function() {
  const user = this;
  const payload = {id: user._id};
  const options = {expiresIn: '2d', issuer: 'browser-story'};
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secret, options);
  return token;
}

const User = mongoose.model('user', userSchema);

module.exports = User;