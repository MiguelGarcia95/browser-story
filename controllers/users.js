const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    const user = await new User(req.body);
    try {
      await user.save();
      res.status(201).send({user});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  login: async (req, res) => {
    console.log(req.body)
  },
  loginWithToken: async (req, res) => {
    // decode cookie
  },  
  logout: async (req, res) => {
    // will merely delete local cookie
  },
  
}