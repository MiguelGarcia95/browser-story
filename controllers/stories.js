const Story = require('../models/Story');
const StoryMap = require('../models/StoryMap');

module.exports = {
  index: async (req, res) => {},

  create: async (req, res) => {
    const story = await new Story(req.body);
    
    try {
      const storyMap = await new StoryMap({
      // once done, add this to story
        story: story._id,
        isParentOriginal: true,
        parent: story._id,
      });
      story.storyMap = storyMap._id;
      console.log(story);
      res.status(201).send({story, storyMap});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

}
