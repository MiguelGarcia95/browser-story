const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storyMapSchema = new Schema({
  story: {
    type: Schema.Types.ObjectId,
    ref: 'story'
  },
  isParentOriginal: {
    type: Boolean,
    default: true,
  },
  parent: {
    type: String,
    required: true,
  },
  optionList: {
    type: Array,
    required: false,
  },
  currentOption: {
    type: Schema.Types.ObjectId,
    ref: 'option',
    required: false
  }
})

const StoryMap = mongoose.model('storyMap', storyMapSchema);

module.exports = StoryMap;