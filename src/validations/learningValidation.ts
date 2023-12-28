import Joi from 'joi';

const addLearningValidation = Joi.object({
    judul: Joi.string().max(100).required(),
    imageUrl: Joi.string().optional()
})

const idLearningpath = Joi.number().positive().min(1).required();

export default { addLearningValidation, idLearningpath };
