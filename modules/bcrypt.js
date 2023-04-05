const bcrypt = require("bcrypt")

module.exports.createCrypt = (password) => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

module.exports.compareCrypt = (password, crypt) => {
    return bcrypt.compareSync(password, crypt)
}