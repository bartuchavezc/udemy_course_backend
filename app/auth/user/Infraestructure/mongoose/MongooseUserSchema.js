const { Schema } = require('mongoose');

const UserSchema = Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    deletedAt: {
        type: Date,
        default: null
    }
});

UserSchema.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject()
    object.uid = _id;
    return object;
});

module.exports = {
    UserSchema
}