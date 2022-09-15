const mongoose = require('mongoose')

const User = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    hashedPassword: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    organization: { type: String, required: true },
    position: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    projects: [String],
  },
  { timestamps: true },
)

module.exports = mongoose.model('Users', User)
