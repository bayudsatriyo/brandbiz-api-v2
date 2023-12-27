import Joi from 'joi';

const addLearningValidation = Joi.string().max(100).required();

const idLearningpath = Joi.number().positive().min(1).required();

export default { addLearningValidation, idLearningpath };
