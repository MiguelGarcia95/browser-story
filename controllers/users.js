const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    console.log(req.body)
    res.status(200).send('succcess')
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