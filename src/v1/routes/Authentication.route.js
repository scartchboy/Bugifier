const routes = require('express').Router()
const {
  register,
  login,
  loginWithGoogle,
} = require('../controllers/Authentication.controller')

routes.use('/register', register)
routes.use('/login', login)
routes.use('/loginWithGoogle', loginWithGoogle)

module.exports = routes
