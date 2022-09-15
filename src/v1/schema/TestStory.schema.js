const joi = require('joi')

module.exports.TestStorySchema = joi.object({
    title:joi.string().required(),
    description:joi.string().allow(),
    imageUrl:joi.string().allow(),
    Tested:joi.boolean().required(),                            
})
