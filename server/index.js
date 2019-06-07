const express = require ('express');
const app = express();
const ctrl = require('./controller')
const massive = require('massive')
require('dotenv').config()

app.use(express.json())


const port = 4000;
app.listen(port, () => {
    console.log('Listening on port', port)
})