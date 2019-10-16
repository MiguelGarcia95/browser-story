const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  root: {
    type: Boolean,
    default: true,
  },
  optionList: {
    type: Array,
    required: false,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

const Story = mongoose.model('option', storySchema);

module.exports = Story;