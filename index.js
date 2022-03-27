require('dotenv').config();

const port = process.env.PORT;

const express = require('express');
const mongoose = require('mongoose');

const routerApi = require('./src/routes');

const app = express();

app.listen(port, () => {
    console.log("Active port", port);
})

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log())
    .catch((err) => console.error(err))