const mongoose = require('mongoose')
const GlobalTestStories = mongoose.Schema(
  {
    projectId: { type: String, required: true },
    bugStories: [
      {
        title: { type: String, required: true },
        description: { type: String },
        imageUrl: { type: String },
        resolved: { type: Boolean, required: true },
        bugResolvers: [{ type: String }],
      },
    ],
  },
  { timestamps: true },
)

module.exports = mongoose.model('GlobalTestStories', GlobalTestStories)
