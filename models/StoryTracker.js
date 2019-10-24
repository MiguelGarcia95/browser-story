const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storyTrackerSchema = new Schema({
  story: {
    type: Schema.Types.ObjectId,
    ref: 'story',
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  currentOption: {
    type: Schema.Types.ObjectId,
    ref: 'option',
    required: false
  }
})

const StoryTracker = mongoose.model('storyTracker', storyTrackerSchema);

module.exports = StoryTracker;