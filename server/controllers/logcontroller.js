const router = require('express').Router();
const sequelize = require('../db');
const User = require('../models/usermodel')(sequelize, require('sequelize'));
const Log = require('../models/logmodel')(sequelize, require('sequelize'));

/********************************
GET ALL LOGS FOR INDIVIDUAL USER
**********************************/

router.get('/log', function(req, res){
    var logOwner = req.user.id;

    Log
        .findAll({
            where: {owner_id: logOwner}
        })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
})


/********************************
POST SINGLE LOG FOR INDIVIDUAL USER
**********************************/

router.post('/log', function (req, res) {
    var logOwner = req.user.id;
    var logDescription = req.body.log.description;
    var logDefinition = req.body.log.definition;
    var logResult = req.body.log.result;

    Log.create({
            description: logDescription,
            definition: logDefinition,
            result: logResult,
            owner_id: logOwner
        })
        .then(
            function createSuccess(userLog) {
                res.json({
                    log: log
                });
            },   
            function createError(err) {
                res.send(500, err.message);
            }
        );
});


/********************************
GET SINGLE ITEM FOR INDIVIDUAL USER
**********************************/

router.get('/:id', function (req, res) {

    var data = req.params.id;
    var userid = req.user.id;

    Log
        .findOne({
        where: {id: data, owner: userid}
        })
            .then(
                function findOneSuccess(data) {
                res.json(data);
                },
        function findOneError(err) {
            res.send(500, err.message);
        }
    );
});



/********************************
DELETE  ITEM FOR INDIVIDUAL USER
**********************************/
router.delete('/delete/:id', function(req, res){ //:id allows a parameter to be passed through the URL to the server so we can use it later.
    var data = req.params.id;
    var userid = req.user.id;

    Log
        .destroy({
            where: {
                id: data, owner: userid
            }
        })
        .then(
            function deleteLogSuccess(data){
                res.send('you removed a log');
            },
            function deleteLogError(err){
                res.send(500, err.message);
            }
    );
});


/********************************
UPDATE SINGLE ITEM FOR INDIVIDUAL USER
**********************************/
router.put('/update/:id', function (req, res) {
    var data = req.params.id;
    var Log = req.body.log.item;

    Log
        .update({
            log: log,
        },
        {where: {id: data}}
        ).then(
            function updateSuccess(log) {
                res.json({
                    log: log 
                });
            },   
            function updateError(err) {
                res.send(500, err.message);
            }
        );
});

module.exports = router;