import Joi from "joi";

const addKuisValidation = Joi.object({
    soal: Joi.string().required(),
    opsi_a: Joi.string().required(),
    opsi_b: Joi.string().required(),
    opsi_c: Joi.string().required(),
    opsi_d: Joi.string().required(),
    jawaban: Joi.string().required(),
    learning_id: Joi.number().required()
})

const updateKuisValidation = Joi.object({
    soal: Joi.string().required(),
    opsi_a: Joi.string().required(),
    opsi_b: Joi.string().required(),
    opsi_c: Joi.string().required(),
    opsi_d: Joi.string().required(),
    jawaban: Joi.string().required(),
})

const idKuisValidation = Joi.number().positive().min(1).required()

export default { addKuisValidation, updateKuisValidation, idKuisValidation }