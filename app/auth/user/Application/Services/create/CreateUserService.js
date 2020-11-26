const SaveUserRepository = require('../../../Infraestructure/mongoose/Repository/SaveUserRepository')
const { newUser } = require('../../../Domain/User');
const Logger = require('../../../../../shared/Logger');

const saveUser = async (userData) => {

    const user = newUser(userData);
    return new Promise(async (resolve, reject) => {

        SaveUserRepository.existsEmail(user.email)
            .then(result => {
                if (result) {
                    reject({
                        status: 400,
                        error: new Error("The user exist")
                    });
                } else {

                    SaveUserRepository.saveUser(user)
                        .then(result => {
                            resolve()
                        })
                        .catch(error => {
                            Logger.error(error);
                            reject({
                                status: 500,
                                error: new Error("Something was wrong saving user")
                            })
                        });
                }
            });

    });
}

module.exports = {
    saveUser
}