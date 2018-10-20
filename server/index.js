const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
const app = express();
require('dotenv').config();
app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

massive(process.env.CONNECTION_STRING).then(database=>{
    app.set('db', database);
}).catch(error=>{
    console.error("error in connecting to Database", error);
})
app.get('/api/houses', controller.read);
app.post('/api/houses', controller.create);
app.delete('/api/houses/:id', controller.delete);
app.put('/api/houses/:id', controller.update);

const SERVER_PORT = 4000;
app.listen(SERVER_PORT, ()=>{
    console.log(`Tunin INTO port ${SERVER_PORT}`);
})