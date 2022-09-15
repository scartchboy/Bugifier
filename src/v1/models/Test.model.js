const mongoose = require('mongoose')

const Test = mongoose.Schema(
  {
    projectId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    downloadUrl: { type: String },
    readyToDeploy: { type: Boolean },
    testStories: [
      {
        title: { type: String, required: true },
        description: { type: String },
        imageUrl: { type: String },
        Tested: { type: Boolean, required: true },
        testers: [{ type: String }],
      },
    ],
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

module.exports = mongoose.model('Tests', Test)
