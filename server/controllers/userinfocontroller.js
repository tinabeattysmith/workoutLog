const router = require('express').Router();
const sequelize = require('../db');
const User = require('../models/usermodel')(sequelize, require('sequelize'));
const UserInfo = require('../models/userinfo')(sequelize, require('sequelize'));

/********************************
CREATE  information
**********************************/
router.post('/createInfo', (req, res) => {
 
UserInfo.create({
    dateOfBirth: req.body.userInfo.dateOfBirth,
    age: req.body.userInfo.age,
    heightInInches: req.body.userInfo.heightInInches,
    weightInPounds: req.body.userInfo.weightInPounds,
    goal: req.body.userInfo.goal,
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
    }).catch(err => res.status(500).json({
        message: `User Info not found`,
        err: `${err}`}
        ));
});

/********************************
Update  information
**********************************/
router.put('/updateInfo', (req, res) => {
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
    }).catch(err => res.status(500).json({
        message:`User Info not updated`,
        err: '${err}'
    }
        ));
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
        .then(function createSuccess(data) {
            res.status(200).json({
                message: "User deleted",
                data: data
            })
        }).catch(err => res.status(500).json({
            message:`User Info not deleted`,
            err: '${err}'
        }
            ));
    });


module.exports = router;