const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({

})

const Story = mongoose.model('Story', storySchema);

module.exports = Story;