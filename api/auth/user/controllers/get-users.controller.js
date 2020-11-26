const GetAllUsersService = require("../../../../app/auth/user/Application/Services/find/GetAllUsersService");

const getUsers = (req, res) => {
    GetAllUsersService.getAll().then((result) => {
        res.json({
            ok: true,
            users: result
        });
    })
        .catch(error => {
            res.status(500).json({
                ok: false,
                error: error
            });
        })
}
module.exports = getUsers