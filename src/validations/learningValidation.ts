import Joi from 'joi';

const addLearningValidation = Joi.string().max(100).required();

export default { addLearningValidation };
