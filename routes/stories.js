const express = require('express');
const router = express.Router();
const stories = require('../controllers/stories');

router.route('/').post(stories.create);
router.route('/:id').get(stories.getStory);
router.route('/getStories').get(stories.getStories);
router.route('/:id/start').post(stories.startStory);
router.route('/:id/addStartingOption').post(stories.addStartingOption);
router.route('/edit/:id').patch(stories.edit);
//   .patch(storyMaps.updateCurrentOption);
module.exports = router;  