const Story = require('../models/Story');
const StoryMap = require('../models/StoryMap');

module.exports = {
  getStory: async (req, res) => {

  },

  startStory: async (req, res) => {
    try {
      const story = await Story.findById(req.params.id).populate('storyMap');
      console.log('story started');
      console.log(story.storyMap);
      console.log(req.body.userId);

    } catch (error) {
      
    }
  },

  create: async (req, res) => {
    const story = await new Story(req.body);
    try {
      const storyMap = await new StoryMap({
        story: story._id,
        isParentOriginal: true,
        parent: story._id,
      });
      story.storyMap = storyMap._id;
      await story.save();
      await storyMap.save();
      res.status(201).send({story, storyMap});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  edit: async (req, res) => {
    // edit name, image, and description
  },
}
