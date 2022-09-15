const { response } = require('express')
const User = require('../models/User.model')
const { ErrorCodes } = require('../../utils/error_code')

const {
  encryptPassword,
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
} = require('../../helpers/index')

module.exports.register = async (req, res) => {
  const isGoogleSignup = req.body.isGoogle
  var hashPassword = ''
  if (isGoogleSignup) {
    let password = req.body.password.toString()
    hashPassword = await encryptPassword(password)
  }
  const { email } = req.body.email
  try {
    const user = await User.findOne({ email: email })
    if (user != null) {
      return res.send(ErrorCodes.DUPLICATE_USER)
    }

    const newUser = User({
      firstName: req.body.firstName,
      lastName: '',
      hashedPassword: hashPassword,
      email: req.body.email,
      organization: req.body.organization,
      position: req.body.position,
      phone: req.body.phone,
      projects: [],
    })

    const newUserCreated = await newUser.save()

    const { hashedPassword, ...profile } = newUserCreated._doc
    res.send({
      status: 'Success',
      message: 'User Created SuccessFully',
      profile,
    })
  } catch (error) {
    res.send(ErrorCodes.DUPLICATE_PASSWORD)
  }
}

module.exports.login = async (req, res, next) => {
  const { email, password, isGoogle } = req.body

  try {
    const user = await User.findOne({ email: email })
    if (!user) {
      res.send(ErrorCodes.INVALID_USER)
    }

    if (isGoogle == false && password != '') {
      const isValidPassword = verifyPassword(user.hashedPassword, password)
      if (!isValidPassword) {
        res.send(ErrorCodes.INVALID_USER)
      }
    }

    const accessToken = await generateAccessToken(user)
    const refreshToken = await generateRefreshToken(user)

    const { hashedPassword, ...profile } = user._doc

    const tokens = {
      accessToken: accessToken,
      refreshToken: refreshToken,
    }

    return res.status(200).json({ profile, tokens })
  } catch (error) {
    console.log(error)
    res.send(error.message)
  }

 
}



module.exports.loginWithGoogle = async (req, res, next) => {
  const { email } = req.body

  try {
    const user = await User.findOne({ email: email })
    if (!user) {
      res.send(ErrorCodes.INVALID_USER)
    }
    const accessToken = await generateAccessToken(user)
    const refreshToken = await generateRefreshToken(user)

    const { hashedPassword, ...profile } = user._doc

    const tokens = {
      accessToken: accessToken,
      refreshToken: refreshToken,
    }

    return res.status(200).json({ profile, tokens })
  } catch (error) {
    console.log(error)
    res.send(error.message)
  }
}
