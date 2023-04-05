const { findUsers, createUsers } = require("../models/UserModel")
const { createCrypt, compareCrypt } = require("../modules/bcrypt")
const { createToken } = require("../modules/jwt")
const { userRegistrationValidation } = require("../modules/validation")
const { use } = require("../routes/userRoute")

module.exports = {
    userGetController: (req, res) => {
        res.send("users")
    },
    userPostController: async (req, res) => {
        try {
            const data = await userRegistrationValidation(req.body)
            
            const user = await findUsers(data.email)
            console.log(user)
            
            if(user) {
                throw new Error("This email is registered already")
            }

            await createUsers(data.email, createCrypt(data.password))

            res.status(201).json({
                ok: true,
                message: "Created successfully"
            })

        } catch (error) {
            res.status(400).json({
                ok: false,
                message: error + "",
            })
        }
    },
    UserLoginPostController: async (req, res) => {
        try {
            const data = await userRegistrationValidation(req.body)

            const user = await findUsers(data.email)

            if(!user) {
                throw new Error("Users not found")
            }
            const isTrust = compareCrypt(data.password, user.password)

            if(!isTrust) {
                throw new Error("Password in incorrect")
            }

            const token = createToken({
                user_id: user.id,
            })

            console.log(token)
            
            res.status(200).json({
                ok: true,
                message: "Successfully login on",
                data: {
                    token,
                }
            })
            
        } catch (error) {
            res.status(400).json({
                ok: false,
                message: error + "",
            })
        }
    }
}