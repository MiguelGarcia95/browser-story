const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  storyMap: {
    type: Schema.Types.ObjectId,
    ref: 'storyMap'
  },
  optionOrder: {
    type: Array,
    required: false,
  }
})

const Story = mongoose.model('story', storySchema);

module.exports = Story;