const routes = require('express').Router()

routes.use('/user', require('./Authentication.route'))
routes.use('/auth', require('./Project.route'))



module.exports=routes