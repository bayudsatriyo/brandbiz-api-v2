import Joi from 'joi'

const addUsersValidation = Joi.object({
  email: Joi.string().max(100).required(),
  username: Joi.string().max(100).required(),
  fullname: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  alamat: Joi.string().max(100).optional(),
  role: Joi.string().max(50).optional(),
  profileUrl: Joi.string().optional()
})

const loginUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required()
})

const emailorusernameValidation = Joi.string().max(100).required()

const updateValidation = Joi.object({
  email: Joi.string().max(100).optional(),
  username: Joi.string().max(100).optional(),
  fullname: Joi.string().max(100).optional(),
  alamat: Joi.string().max(100).optional(),
  role: Joi.string().max(50).optional(),
  profileUrl: Joi.string().optional().allow(null)
})

const skorValidation = Joi.number().positive().min(1).required()

const feedbackValidation = Joi.string().required()

export default {
  addUsersValidation, 
  loginUserValidation, 
  emailorusernameValidation, 
  updateValidation, 
  feedbackValidation,
  skorValidation
}
