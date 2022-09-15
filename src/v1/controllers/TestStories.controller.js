const Test = require('../models/Test.model')
module.exports.createTestStories = async (req, res, next) => {
  try {
    const newTest = Test({
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      downloadUrl: req.body.downloadUrl,
      projectId: req.body.projectId,
    })
    const newTestCreated = await newTest.save()

    res.send({
      success: true,
      message: 'Test story Created Successfully',
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Test story is not  Created ',
    })
  }
}
module.exports.createGlobalTestStories = async (req, res, next) => {
  try {
    const newTest = Test({
      projectId: req.body.projectId,
      globalTestStories: req.body.globalTestStories,
    })
    const newGlobalTestStories = await newTest.save()

    res.send({
      success: true,
      message: 'Test story Created Successfully',
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Test story is not  Created ',
    })
  }
}
module.exports.updateGlobalTestStories = async (req, res, next) => {
  try {
    const newTest = Test({
      projectId: req.body.projectId,
      globalTestStories: req.body.globalTestStories,
    })
    const newGlobalTestStories = await newTest.save()

    res.send({
      success: true,
      message: 'Test story Created Successfully',
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Test story is not  Created ',
    })
  }
}
