const bcrypt = require('bcrypt')
const saltRounds = 10

const encryptPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        if (hash) {
            return hash
        }
        else {
            return false
        }
    }
    catch (error) {
        return error.message
    }
}

const verifyPassword = async (password, hash) => {
    try {
        const match = await bcrypt.compare(password, hash)
        if (match) {
            return match
        }
        else {
            return false
        }
    }
    catch (error) {
        return error
    }
}

module.exports = {
    encryptPassword,
    verifyPassword
}