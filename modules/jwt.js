const jwt = require("jsonwebtoken")

module.exports.createToken = function (data) {
    return jwt.sign(data,"password")
}

module.exports.checkToken = function(token) {
    try {
        return jwt.verify(token,"password")
    } catch (error) {
        return false
    }
}