const User = require('../MongooseUserModel');


const getUsers = () => {
    return User.find()
}

module.exports = {
    getUsers
}