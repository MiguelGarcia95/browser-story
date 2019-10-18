const Story = require('../models/Story');
const StoryTracker = require('../models/StoryTracker');

module.exports = {
  getStory: async (req, res) => {
    try {
      const story = await Story.findById(req.params.id);
      res.status(201).send({story});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  addStartingOption: async (req, res) => {
    try {
      console.log(req.body);
      res.status(201).send({});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  getStoryTracker: async (req, res) => {
    try {
      const storyTracker = await StoryTracker.findById(req.params.id);
      res.status(201).send({storyTracker});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
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
