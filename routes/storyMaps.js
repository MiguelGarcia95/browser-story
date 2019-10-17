const express = require('express');
const router = express.Router();
const storyMaps = require('../controllers/storyMaps');

router.route('/:id')
  .get(storyMaps.getStoryMap)
  .post(storyMaps.cloneStoryMap)
  .patch(storyMaps.updateCurrentOption);

router.route('/:id/addOption').put(storyMaps.addOption);

module.exports = router;  