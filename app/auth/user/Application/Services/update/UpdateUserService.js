const Logger = require('../../../../../shared/Logger');
const UpdateUserRepository = require('../../../Infraestructure/mongoose/Repository/UpdateUserRepository');
const SaveUserRepository = require('../../../Infraestructure/mongoose/Repository/SaveUserRepository');

const updatedUser = async (user) => {

    return new Promise(async (resolve, reject) => {
        UpdateUserRepository.existsUser(user.uid)
            .then(result => {
                console.log(result);
                if (!result) {
                    reject({
                        status: 404,
                        error: new Error('Not found user')
                    })
                } else {

                    SaveUserRepository.existsEmail(user.email)
                        .then(result => {
                            if (result) {
                                reject({
                                    status: 404,
                                    error: new Error('Email already exist!')
                                })
                            } else {
                                UpdateUserRepository.updateUser(user)
                                    .then(result => {
                                        resolve(result);
                                    })
                                    .catch(error => {
                                        Logger.error(error);
                                        reject({
                                            status: 500,
                                            error: new Error("Something was wrong updating the user")
                                        })
                                    })
                            }
                        });
                }
            });
    });

}

module.exports = {
    updatedUser
}