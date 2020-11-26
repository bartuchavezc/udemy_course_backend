const { response } = require("express");
const { updatedUser } = require("../../../../app/auth/user/Application/Services/update/UpdateUserService");
const updateUser = (req, res = response) => {
    // comprobar token y si es el usuario correcto

    const { password, google, ...user } = req.body;
    user.uid = req.params.id;

    updatedUser(user)
        .then(result => {
            res.json({
                ok: true,
                message: "Updated User",
                user
            })
        })
        .catch(error => {
            res.status(error.status).json({
                ok: false,
                message: error.error.message
            })
        });

}

module.exports = updateUser;
