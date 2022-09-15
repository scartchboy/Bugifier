const mongoose = require('mongoose')

const Project = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    admin: { type: String, required: true },
    members: [String],
  },
  { timestamps: true },
)

module.exports = mongoose.model('Projects', Project)
