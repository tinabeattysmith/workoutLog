const router = require('express').Router();
const sequelize = require('../db');
const User = require('../models/usermodel')(sequelize, require('sequelize'));
const UserInfo = require('../models/userinfo')(sequelize, require('sequelize'));

/********************************
CREATE  information
**********************************/
router.post('/createInfo' , (req, res) => {
 
UserInfo.create({
    birthday: req.body.UserInfo.dateOfBirth,
    age: req.body.UserInfo.age,
    height: req.body.UserInfo.heightInInches,
    weight: req.body.UserInfo.weightInPounds,
    goal: req.body.UserInfo.goal,
    userId:req.user.id,
})
    .then(userInfo => res.status(200).json(userInfo))
    .catch(err => console.log(`${err}`));

});

/********************************
Get  information
**********************************/
router.get('/getInfo', (req, res) => {
    UserInfo.findOne({
        where: {
            userID: req.user.id
        }
    })
    .then(function createSuccess(data) {
        res.status(200).json({
            message: "User info found",
            data: data
        })
    }).catch(err => res.status(500).json(`User Info not found`, `${err}`));
});

/********************************
Update  information
**********************************/
router.getput('/getInfo', (req, res) => {
    UserInfo.update(req.body.userInfo, {
        where: {
            userID: req.user.id
        }
    })
    .then(function createSuccess(data) {
        res.status(200).json({
            message: "User info updated",
            data: data
        })
    }).catch(err => res.status(500).json(`User Info not updated`, `${err}`));
});

/********************************
DELETE  information
**********************************/
router.delete('/deleteinfo/:id', function(req, res){
    const logID = req.params.id;
    const userid = req.user.id;

    Log
        .destroy({
            where: {
                id: logID, owner_id: userid
            }
        })
        .then(
            function deleteLogSuccess(Log){
                res.send('Log successfully deleted');
            },
            function deleteLogError(err){
                res.send(500, err.message);
            }
    );
});