const SaveUserRepository = require("../../../../user/Infraestructure/mongoose/Repository/SaveUserRepository");
const { verifyPassword } = require("../../../Domain/Login");
const { generateJWT } = require('../../../../../shared/Helpers/jwt');

const logged = async ({ email, password }) => {
    return new Promise((resolve, reject) => {
        SaveUserRepository.existsEmail(email)
            .then(async user => {

                if (!user) {
                    reject({ status: 404, error: new Error("Email or passwor wrong") });
                }

                if (!verifyPassword(password, user.password)) {
                    reject({ status: 200, error: new Error("Email or passwor wrong") })
                }

                // generar token
                const token = await generateJWT(user.id)
                resolve(token);

            });
    });
}

module.exports = {
    logged
}