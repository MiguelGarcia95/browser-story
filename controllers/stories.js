const Story = require('../models/Story');
const StoryMap = require('../models/StoryMap');

module.exports = {
  index: async (req, res) => {

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
      story.save();
      storyMap.save();
      res.status(201).send({story, storyMap});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  edit: async (req, res) => {

  },
}
