const Project = require('../models/Project.model')
module.exports.createChannel = async (req, res, next) => {
  const userId = req.decoded.id

  try {
    const newProject = Project({
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      admin: userId,
      description: req.body.description,
      members: req.body.members,
    })
    const newProjectCreated = await newProject.save()
    res.send({
      success: true,
      message: 'Project Created Successfully',
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Project is not  Created ',
    })
  }
}

module.exports.getProjects = async (req, res, next) => {
  const userId = req.decoded.id
  try {
    const projects = await Project.find({ admin: userId }).lean()

    res.send(projects)
  } catch (e) {}
}
