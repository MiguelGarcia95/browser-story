const Story = require('../models/Story');
const StoryTracker = require('../models/StoryTracker');

module.exports = {
  getStory: async (req, res) => {

  },

  addStartingOption: async (req, res) => {

  },

  startStory: async (req, res) => {
    try {
      const story = await Story.findById(req.params.id);
      const userStoryTracker = await new StoryTracker({
        story: story._id,
        user: req.body.user._id,
      });
      await  userStoryTracker.save();
      res.status(201).send({userStoryTracker});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  create: async (req, res) => {
    const story = await new Story(req.body);
    try {
      await story.save();
      res.status(201).send({story});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  edit: async (req, res) => {
    // edit name, image, and description
  },
}
