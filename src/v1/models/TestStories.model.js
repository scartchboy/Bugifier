const mongoose = require('mongoose')

const moment = require('moment')

const TestStory = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  Tested: { type: Boolean, required: true },
  testers: [{ type: String }],
})

module.exports = mongoose.model('TestStories', TestStory)
