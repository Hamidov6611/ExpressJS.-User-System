const { checkToken } = require("../modules/jwt")

module.exports = function AuthMiddleware(req, res, next) {
    try {
        if(!req.headers["authorization"]) {
            throw new Error("Token is not defined")
        }

        const check = checkToken(req.headers["authorization"])

        if(!check) {
            throw new Error("Token is invalid")
        }

        next()

    } catch (error) {
        res.status(401).json({
            ok: true,
            message: error + "",
        })
    }
}