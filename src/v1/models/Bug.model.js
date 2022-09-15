const mongoose = require('mongoose')

module.exports.Bug = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    resolved: { type: Boolean, required: true },
    bugResolvers: [ String ],
  },

  { timestamps: true },
)
