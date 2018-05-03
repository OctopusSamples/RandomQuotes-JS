// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
// var User = require('./User');
// ADD THIS PART
// CREATES A NEW USER
// router.post('/', function (req, res) {
//     User.create({
//             name : req.body.name,
//             email : req.body.email,
//             password : req.body.password
//         },
//         function (err, user) {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(user);
//         });
// });
// RETURNS ALL THE USERS IN THE DATABASE

router.get('/blah', function (req, res) {
    res.status(200).send("Blah");
});

router.get('/', function (req, res) {
    res.status(200).send("GIT IT");
});


router.get('/:id', function (req, res) {
    res.status(200).send("Real onw! " + req.params.id);
});


module.exports = router;