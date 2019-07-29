const Joi = require('joi')

module.exports = {
    name: Joi.string().required(),
    body: {
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .required()
            .min(6)
    }
}
