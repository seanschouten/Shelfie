require('dotenv').config();
const express = require ('express');
const massive = require('massive');
const ctrl = require('./controller');
const { SERVER_PORT , CONNECTION_STRING } = process.env

const app = express();

app.use(express.json())


massive(CONNECTION_STRING).then(db => {
    console.log('db is connected')
    app.set('db', db);
});

app.listen(SERVER_PORT, () => 
    console.log(`Listening on port ${SERVER_PORT}`));