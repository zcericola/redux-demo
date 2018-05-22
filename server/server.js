//dependencies
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
require("dotenv").config();
const mainCtrl = require('./controllers/mainCtrl');

//Custom Middleware
const checkForSession = require('./middlewares/checkForSession');

//server port
const port = 3002;
//creates instance of express server
const app = express();
//MiddleWares
app.use(cors());
app.use(json());

app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true

}))

app.use( checkForSession );

//endpoints
app.post( '/api/login', mainCtrl.login );
app.get('/api/user', mainCtrl.getUser);
app.post('/api/signout', mainCtrl.signout);

//Checking that server is running
app.listen(port, () => {
console.log('Avast ye scurvy dogs! We be pulling into port ' + port);
});