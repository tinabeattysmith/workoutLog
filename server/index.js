require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');
const user = require('./controllers/usercontroller')
const userLog = require('./controllers/logcontroller');
const logmodel = require('./models/logmodel');

sequelize.sync(); //tip {force: true} for resetting tables
app.use(express.json());
app.use(require('./middleware/headers'));

//Test Route
app.use('/test', function(request, response){
    response.send("This is data from the /api/test endpoint.  It is from the server")
});

//User register route
app.use('/user', user);


//PROTECTED ROUTES
app.use(require('./middleware/validate-session'));
app.use('/log', logmodel);

app.listen(3100, function(){
    console.log('App is listening on 3100')
});