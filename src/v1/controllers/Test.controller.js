const Test = require('../models/Test.model')
module.exports.createTest = async (req, res, next) => {
  
  try {
    const newTest = Test({
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      downloadUrl: req.body.downloadUrl,
      projectId: req.body.projectId,
      readyToDeploy:req.body.readyToDeploy,
      testStories: req.body.testStories,
      bugStories: req.body.bugStories,
    })
    const newTestCreated = await newTest.save()
    
    res.send({
      success: true,
      message: 'Test Created Successfully',
    })
  } catch (error) {
    res.send({
      success: false,
      message: 'Test is not  Created ',
    })
  }
}
