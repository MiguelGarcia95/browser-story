const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  optionList: [{
    type: Schema.Types.ObjectId,
    ref: 'option'
  }],
})

const Story = mongoose.model('option', storySchema);

module.exports = Story;