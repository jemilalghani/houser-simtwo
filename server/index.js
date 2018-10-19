const express = require('express');
const bodyParser = require('body-parser');
const controlller = require('./controller');
const massive = require('massive');
const app = express();
require('dotenv').config();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database=>{
    app.set('db', database);
}).catch(error=>{
    console.error("error in connecting to Database", error);
})



const SERVER_PORT = 4000;
app.listen(SERVER_PORT, ()=>{
    console.log(`Tunin INTO port ${SERVER_PORT}`);
})