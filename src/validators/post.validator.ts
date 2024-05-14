import Joi from "joi";

export const postValidator = Joi.object({
    Userid: Joi.number().min(1).max(10).required().messages({
        "number.min": "minimum 1 symbol required",
        "number.max": "maximum symbol is 10"
    }),
    title: Joi.string().pattern(/w{10,}/).required().messages({
        "string.pattern.base": "Only word accepted",
        "string.required": "Title is required"
    }),
    body: Joi.string().pattern(/w{10,}/).required().messages({
        "string.pattern.base": "Only words accepted",
        "string.required.base": "Body must be fulfill"
    })
})