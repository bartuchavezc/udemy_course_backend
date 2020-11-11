const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.info('connected to db successfull');
        
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    dbConnection
}