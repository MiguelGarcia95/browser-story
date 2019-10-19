const Story = require('../models/Story');
const StoryTracker = require('../models/StoryTracker');
const Option = require('../models/Option');

module.exports = {
  getOption: async (req, res) => {
    try {
      const option = await Option.findById(req.params.id).populate('optionList', 'name trigger description location karmaPoints');
      res.status(201).send({option});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },

  edit: async (req, res) => {
    try {
      const option = await Option.findById(req.params.id);
      console.log('edit');
      res.status(201).send({option});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },
  
  addOption: async (req, res) => {
    try {
      const option = await Option.findById(req.params.id);
      const newOption = await new Option(req.body);
      option.optionList = [...option.optionList, newOption._id];
      await newOption.save();
      await option.save();
      res.status(201).send({option, newOption});
    } catch (error) {
      console.log(error);
      res.status(400).send({error}); 
    }
  },
}