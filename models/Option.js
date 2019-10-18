const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  trigger: {
    type: String,
  },
  location: {
    type: String,
  },
  karmaPoints: {
    type: Number,
    default: 0,
  },
  optionList: {
    type: Array,
    required: false,
  }
})

const Story = mongoose.model('option', storySchema);

module.exports = Story;