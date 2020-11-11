'use strict'
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// crear el servidor express
const app = express();

app.use(cors());

dbConnection();

app.get('/', (req, res) => {
    res.json({
        ok: true,
        mssg: "Hello world"
    });
})

// user: mean_user
// pass: 4I5XHOrvutQG0UhR

app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en puerto ' + process.env.PORT);
});