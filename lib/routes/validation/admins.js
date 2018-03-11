import Joi from 'joi'

export default {
  createAdmin: {
    body: {
      firstName: Joi.string().min(3).required(),
      lastName: Joi.string().min(3).required(),
      phoneNumber: Joi.number().required(),
      email: Joi.string().required()
    }
  }
}
