const { genSaltSync, hashSync } = require('bcryptjs');
const salt = genSaltSync();

const newUser = ({
    fullname,
    email,
    password,
    img,
    role,
    google }) => {

    const password_hash = hashSync(password, salt);

    return {
        fullname,
        email,
        password: password_hash,
        img,
        role,
        google
    }

}

module.exports = {
    newUser
}