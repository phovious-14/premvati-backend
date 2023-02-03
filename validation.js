const Joi = require("joi")

module.exports = (data) => {
    let schema = Joi.object({

        age: Joi.string().required(),
        gender: Joi.string().required(),
        order: Joi.string().required(),
        qualityfood: Joi.string().required(),
        tasteoffood: Joi.string().required(),  
        servingmethod: Joi.string().required(),    
        staffbehave: Joi.string().required(),
        cleanliness: Joi.string().required(),  
        likedproduct: Joi.string(),    
        suggestion: Joi.string(),    
        contactnumber: Joi.string().min(10).max(10),    
        formDate: Joi.string(),    
        image: Joi.string(),    
        cityId: Joi.number().integer().required(), 

    })
  
    // This is a shorter version
    const { error } = schema.validate(data);

    return error;
}