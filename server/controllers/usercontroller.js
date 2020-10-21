const express = require('express');
const router = express.Router()
const Sequelize = require('../db');
const User = require('../models/usermodel')(Sequelize, require('sequelize'));
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


//** /user/register endpoint
router.post('/register', function(request, response){
    const username = request.body.user.username;
    const password = request.body.user.password;

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(password, 10)
    })
    .then(
        function createUserSuccess(user) {
            var token = jwt.sign({id: user.id}, 
                process.env.JWT_SECRET, {expiresIn: 60*60*24});

            response.json({
                user: user,
                message: 'created',
                sessionToken: token
            });
        },
        function createUserError(err) {
            response.send(500, err.message)
        }
    );
});

//** /user/login endpoint

router.post('/login', function(request, response){
    User.findOne( {where: { username: request.body.user.username}}).then(
        function(user) {
            if (user) {
                bcrypt.compare(request.body.user.password, user.passwordhash, function (err, userMatches) {
                    if (userMatches) {
                        var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        response.json({
                            user: user,
                            message: "User successfully authenticated.",
                            sessionToken: token
                        });
                    } else {
                        response.status(502).send({error: "User failed to authenticate"});
                    }
                });
            } else {
                response.status(500).send({error: "User failed to authenticate"});
            }
        },
        function(err) {
            response.status(501).send({error: "User failed to login."})
        }
    );
});


module.exports = router;