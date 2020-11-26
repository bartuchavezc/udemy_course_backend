const { response } = require("express");
const DeleteUserService = require("../../../../app/auth/user/Application/Services/delete/DeleteUserService");

const deleteUser = (req, res = response) => {
    const { id } = req.params;
    DeleteUserService.deleteUser(id)
        .then(response => {
            res.json({
                ok: true,
                message: "User Deleted"
            });
        })
        .catch(error => {
            res.status(error.status).send({
                ok: false,
                message: error.error.message
            })
        })
}
module.exports = deleteUser;