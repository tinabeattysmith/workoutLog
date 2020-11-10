const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'projectWorkoutLog', 
    'postgres', 
    'Letmein1234!',
    {
        host: 'localhost',
        dialect: 'postgres'
    });

sequelize.authenticate().then(
    function() {
        console.log("Connected to the project workoutLog postgres database");
    },
    function(err){
        console.log(err);
    }
);

User = require('./models/usermodel')(sequelize, require('sequelize'));
Logs = require('./models/logmodel')(sequelize, require('sequelize'));
UserInfo = require('./models/userinfo')(sequelize, require('sequelize'));

Logs.belongsTo(User);
User.hasMany(Logs);

User.hasOne(UserInfo);
UserInfo.belongsTo(User);

module.exports = sequelize;