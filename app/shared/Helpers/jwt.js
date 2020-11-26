const jwt = require('jsonwebtoken');
const Logger = require('../Logger');

const generateJWT = (uid) => {

    return new Promise((resolve, reject) => {

        const payload = { uid }

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                Logger.error(err);
                reject("No se pudo generar el token")
            }

            resolve(token);
        });
    });

};

module.exports = {
    generateJWT
}