const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
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
  status: {
    type: String,
    default: 'On Going'
  },
  private: {
    type: Boolean,
    default: true
  },
  image: {
    type: String,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  optionList: [{
    type: Schema.Types.ObjectId,
    ref: 'option'
  }],
})

const Story = mongoose.model('story', storySchema);

module.exports = Story;