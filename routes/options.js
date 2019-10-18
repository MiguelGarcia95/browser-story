const express = require('express');
const router = express.Router();
const options = require('../controllers/options');

router.route('/').post(options.create);
router.route('/:id').get(options.getOption);
router.route('/:id/addOption').post(options.addOption);
router.route('/edit/:id').patch(options.edit);
//   .patch(storyMaps.updateCurrentOption);
module.exports = router;  