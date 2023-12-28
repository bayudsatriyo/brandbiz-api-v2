import Joi from "joi";

const addModulValidation = Joi.object({
    judul: Joi.string().max(100).required(),
    inti_materi: Joi.string().required(),
    tambahan: Joi.string().optional(),
    video: Joi.string().optional(),
})

export default { addModulValidation }