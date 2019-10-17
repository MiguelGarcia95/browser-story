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
  optionOrder: { 
    type: Array,
    required: false,
  },
  optionList: {
    type: String,
    default: '0'
  }
})

const StoryMap = mongoose.model('storyMap', storyMapSchema);

module.exports = StoryMap;