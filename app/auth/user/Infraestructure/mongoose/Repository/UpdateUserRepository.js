const MongooseUserModel = require("../MongooseUserModel")

const updateUser = async (userData) => {
    return await MongooseUserModel
        .findByIdAndUpdate(userData.uid, userData, { new: true });
}

const existsUser = async (uid) => {
    return await MongooseUserModel.findById(uid);
}

module.exports = {
    updateUser,
    existsUser
}