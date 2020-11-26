'use strict'
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const { validateJWT } = require('./app/shared/Validation/valitate-jwt');
const { validateRequest } = require('./app/shared/Validation');

// crear el servidor express
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// CONNECT DB
dbConnection();

app.use('/api/users', [validateJWT, validateRequest], require('./api/auth/user/routes/user.routes'))
app.use('/api/auth', require('./api/auth/authentication/routes/auth.routes'))


// user: mean_user
// pass: 4I5XHOrvutQG0UhR

app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en puerto ' + process.env.PORT);
});