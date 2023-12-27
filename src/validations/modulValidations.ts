import Joi from "joi";

const judulModulValidation = Joi.string().max(100).required()

export default { judulModulValidation }