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

module.exports = sequelize;