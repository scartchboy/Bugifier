const mongoose = require('mongoose')
const GlobalBugStories = mongoose.Schema(
  {
    projectId: { type: String, required: true },
    testStories: [
      {
        title: { type: String, required: true },
        description: { type: String },
        imageUrl: { type: String },
        Tested: { type: Boolean, required: true },
        testers: [{ type: String }],
      },
    ],
  },
  { timestamps: true },
)

module.exports = mongoose.model('GlobalBugStories', GlobalBugStories)
