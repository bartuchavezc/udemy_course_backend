const User = require('../MongooseUserModel');

const saveUser = async (userData) => {
    const user = new User(userData);
    return await user.save()
}

const existsEmail = async (email) => {
    return await User.findOne({ email })
}

module.exports = {
    saveUser,
    existsEmail
}