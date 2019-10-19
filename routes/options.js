const express = require('express');
const router = express.Router();
const options = require('../controllers/options');

router.route('/:id')
  .get(options.getOption)
  .post(options.addOption);

router.route('/edit/:id').patch(options.edit);
//   .patch(storyMaps.updateCurrentOption);
module.exports = router;  