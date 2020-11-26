const { model } = require('mongoose');
const { UserSchema } = require('./MongooseUserSchema');


module.exports = model('User', UserSchema);