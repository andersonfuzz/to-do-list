const express = require('express'); //importar o express
const router = require('./router') //mesmo que import
const cors = require('cors')
const app = express(); //criando app
app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;
