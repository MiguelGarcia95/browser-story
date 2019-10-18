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
  image: {
    type: String,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  optionList: {
    type: Array,
    required: false,
  },
})

const Story = mongoose.model('story', storySchema);

module.exports = Story;