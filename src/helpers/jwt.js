const jwt = require('jsonwebtoken')
const env = require('dotenv')
module.exports.generateAccessToken = async ({ _id }) => {
  const accessToken = await jwt.sign(
    {
      id: _id,
    },

    process.env.ACCESS_KEY,
    {
      expiresIn: '3d',
    },
  )
  return accessToken
}
module.exports.generateRefreshToken = async ({ _id }) => {
  const accessToken = await jwt.sign(
    {
      id: _id,
    },

    process.env.REFRESH_KEY,
    {
      expiresIn: '3d',
    },
  )
  return accessToken
}

module.exports.verifyAccessToken = async (hashAccessToken) => {
  const decoded = jwt.verify(hashAccessToken, process.env.ACCESS_KEY)
  return decoded
}
module.exports.verifyRefreshToken = async (hashAccessToken) => {
  const decoded = jwt.verify(hashAccessToken, process.env.REFRESH_KEY)
  return decoded
}
