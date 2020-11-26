const Logger = require("../../../../../shared/Logger");
const GetUsersRepostory = require("../../../Infraestructure/mongoose/Repository/GetUsersRepostory");
module.exports = {
    getAll: () => {
        return new Promise(async (resolve, reject) => {
            GetUsersRepostory.getUsers().then(result => {
                resolve(result);
            }).catch(error => {
                Logger.error(error);
                reject(new Error(error, "Something was wrong getting users"))
            });
        });

    }
}