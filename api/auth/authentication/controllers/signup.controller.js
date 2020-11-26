const { response } = require('express')
const { validationResult } = require('express-validator');
const CreateUserService = require('../../../../app/auth/user/Application/Services/create/CreateUserService');

const signup = (req, res = response) => {

    const { fullname, email, password } = req.body;
    
    CreateUserService.saveUser({ fullname, email, password })
        .then(response => {
            res.json({
                ok: true,
                message: 'Created User'
            })
        })
        .catch(error => {
            res.status(error.status).json({
                ok: false,
                message: error.error.message
            })
        })
}
module.exports = signup;