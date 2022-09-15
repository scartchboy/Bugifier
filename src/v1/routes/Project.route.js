const routes = require('express').Router()
const { createChannel,getProjects } = require('../controllers/Project.controller')
const { createTest, } = require('../controllers/Test.controller')
const { createGlobalTestStories, } = require('../controllers/TestStories.controller')

routes.use('/createChannel', createChannel)
routes.use('/getProjects', getProjects)
routes.use('/project/createTest', createTest)
routes.use('/project/createGlobalTestStories', createTest)
module.exports = routes
