const express = require('express');
const router = express.Router();
const storyMaps = require('../controllers/storyMaps');

router.route('/:id')
  .get(storyMaps.getStoryMap)
  .post(storyMaps.cloneStoryMap)
  .put(storyMaps.updateCurrentOption);

router.route('/edit/:id').post(stories.edit);

module.exports = router;  