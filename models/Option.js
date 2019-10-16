const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  optionList: {
    type: Array,
    required: false,
  }
})

const Story = mongoose.model('option', storySchema);

module.exports = Story;