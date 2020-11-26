const Logger = require("../../../../../shared/Logger");
const User = require("../../../Domain/User");
const UpdateUserRepository = require("../../../Infraestructure/mongoose/Repository/UpdateUserRepository");

const deleteUser = async (id) => {
    return new Promise((resolve, reject) => {
        UpdateUserRepository.existsUser(id)
            .then(result => {
                if (!result) {
                    reject({
                        status: 404,
                        error: new Error('Not found user')
                    });
                }

                UpdateUserRepository.updateUser({
                    uid: id,
                    deletedAt: new Date()
                })
                    .then(resolve)
                    .catch(reject)
            })
            .catch(error => {
                Logger.error(error)
                reject({
                    status: 500,
                    error: new Error("Something was wrong deleting the user")
                });
            });
    });
}

module.exports = {
    deleteUser
}