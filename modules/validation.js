const joi = require("joi")

module.exports.userRegistrationValidation = async function (data) {
    return joi
        .object({
            email: joi
                .string()
                .email()
                .required()
                .error(new Error("Email is invalid")),
            password: joi.string().min(4).max(64).required()
        })
        .validateAsync(data)
}