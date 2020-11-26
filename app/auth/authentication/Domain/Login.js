const { compareSync } = require('bcryptjs');



const verifyPassword = (password, hash) => {
    return compareSync(password, hash);
}

module.exports = {
    verifyPassword
}