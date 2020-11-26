const { logged } = require("../../../../app/auth/authentication/Application/Services/login/LogInService");

const login = (req, res) => {

    const { email, password } = req.body;   

    logged({ email, password })
        .then(result => {
            res.status(200).json({
                ok: true,
                token: result
            });
        })
        .catch(error => {
            res.status(error.status).json({
                ok: false,
                message: error.error.message
            })
        })
}

module.exports = {
    login
}