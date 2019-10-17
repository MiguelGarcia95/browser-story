const express = require('express');
const router = express.Router();
const stories = require('../controllers/stories');

router.route('/')
  .get(stories.index)
  .post(stories.create);

router.route('/edit/:id').post(stories.edit);

module.exports = router;  