const router = require('express').Router();
const sequelize = require('../db');
const User = require('../models/usermodel')(sequelize, require('sequelize'));
const Log = require('../models/logmodel')(sequelize, require('sequelize'));

/********************************
GET ALL LOGS FOR INDIVIDUAL USER
**********************************/

router.get('/logsall', function(req, res){
    const logOwner = req.user.id;

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

router.post('/logcreate', function (req, res) {
    const logOwner = req.user.id;
    const logDescription = req.body.log.description;
    const logDefinition = req.body.log.definition;
    const logResult = req.body.log.result;

    Log
    .create({
            description: logDescription,
            definition: logDefinition,
            result: logResult,
            owner_id: logOwner
        })
        .then(
            function createSuccess(Log) {
                res.json({
                    log: Log,
                    message: 'Log successfully created.'
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

router.get('/Onelog/:id', function (req, res) {

    const data = req.params.id;
    const userid = req.user.id;

    Log
        .findOne({
        where: {id: data, owner_id: userid}
        })
            .then(
                function findOneSuccess(data) {                    
                    res.json(data);
                },
        
            function findOneError(err) {
                response.status(500).send({error: "Requested log does not exist for the current user."});
            
        }
    );
});



/********************************
DELETE  log FOR INDIVIDUAL USER
**********************************/
router.delete('/logdelete/:id', function(req, res){
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


/********************************
UPDATE SINGLE log FOR INDIVIDUAL USER
**********************************/
router.put('/logupdate/:id', function (req, res) {
    const logID = req.params.id;
    const logDescription = req.body.log.description;
    const logDefinition = req.body.log.definition;
    const logResult = req.body.log.result;

    Log
        .update({
            description: logDescription,
            definition: logDefinition,
            result: logResult
            },  

            {where: {id: logID}}

        ).then(
            function updateSuccess(logID) {
                res.json({
                    message: 'Log was successfully updated.'
                });
            },   
            function updateError(err) {
                res.send(500, err.message);
            }
        );
});

module.exports = router;