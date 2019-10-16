const mongoose = require('mongoose');

const storyMapSchema = new mongoose.Schema({
  story: {
    type: Schema.Types.ObjectId,
    ref: 'story'
  },
  optionOrder: {
    type: Array,
    required: false,
  }
})

const StoryMap = mongoose.model('storyMap', storyMapSchema);

module.exports = StoryMap;