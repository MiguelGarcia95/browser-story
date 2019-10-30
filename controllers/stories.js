const Story = require('../models/Story');
const StoryTracker = require('../models/StoryTracker');
const Option = require('../models/Option');

module.exports = {
  getStory: async (req, res) => {
    try {
      const story = await Story.findById(req.params.id).populate('optionList', 'name trigger description location karmaPoints');
      res.status(201).send({story});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  getStories: async (req, res) => {
    try {
      const stories = await Story.find({user: req.body.user}).populate('optionList', 'name trigger description location karmaPoints');
      res.status(201).send({stories});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  getAllStories: async (req, res) => {
    try {
      const stories = await Story.find().populate('optionList', 'name trigger description location karmaPoints');
      res.status(201).send({stories});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  addStartingOption: async (req, res) => {
    try {
      const option = await new Option(req.body)
      const story = await Story.findById(req.params.id);
      story.optionList = [option._id];
      option.save();
      story.save();
      res.status(201).send({message: 'Success'});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  updateStoryTracker: async (req, res) =>  {
    try {
      console.log(req.params.id);
      console.log(req.body);
      // const storyTracker = await StoryTracker.findByIdAndUpdate(req.params.id, {$set:req.body});
      res.status(201).send({storyTracker: ''});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  getStoryTracker: async (req, res) => {
    try {
      const storyTracker = await StoryTracker.find({user: req.body.user, story: req.body.story});
      res.status(201).send({storyTracker: [storyTracker][0]});
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
    try {
      await Story.findByIdAndUpdate(req.params.id, {$set:req.body});
      res.status(201).send({message: 'Success'});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },
}
