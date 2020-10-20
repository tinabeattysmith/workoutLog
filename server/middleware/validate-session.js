const jwt = require('jsonwebtoken');
const Sequelize = require('../db');
const User = require('../models/usermodel')(Sequelize, require('sequelize'));

module.exports = function(request, response, next) {
    if (request.method === 'OPTIONS') {
        next()
    } else {
        var sessionToken = request.headers.authorization;
        if(!sessionToken) return response.status(403).send({auth: false, message: 'No token provided.'});
        else {
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) =>{
                if(decoded){
                    User.findOne({where: {id: decoded.id}}).then(user =>{
                        request.user = user;
                        next();
                    },
                    function(){
                        response.status(401).send({error: 'Not authorized'});
                    });
                } else {
                    response.status(400).send({error: 'Not authorized'});
                }
            });
        }
    }
}