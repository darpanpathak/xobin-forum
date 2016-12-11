var express = require('express');
var cookieParser = require('cookie-parser');
var apiRouter = express.Router();
var bodyparser = require('body-parser');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var fs = require('fs');
var xml2js = require('xml2js');
var _ = require("underscore");

// route middleware to verify a token
function isAuthenticated(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'].split(" ")[1];

    token = token.replace(/['"]+/g, '');

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {

                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                // if everything is good, save to request for use in other routes

                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
};


apiRouter.route('/auth/login')
    .post(function (req, res) {
        var username = req.body.username;
        var password = req.body.password;

        if (username != "test" || password != "test") {
            res.json({
                success: false,
                message: 'Authentication failed. Username or password is wrong.'
            });
        } else {

            var user = {
                username: username,
                password: password
            };

            try {
                var token = jwt.sign(user, config.secret, {
                    expiresIn: 60 * 60 // expires in 1 hours
                });
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token,
                    username: username
                });
            } catch (err) {
                console.log(err);
            }
        }
    });


apiRouter.route('/getPosts')
    .get(isAuthenticated, function (req, res) {

        var postParser = new xml2js.Parser();
        fs.readFile(__dirname + './../../data/Posts.xml', function (err, data) {
            console.log("file error : " + err);
            postParser.parseString(data, function (err, result) {
                console.log("parsing error : " + err);
                res.send(result);
            });
        });

    });

apiRouter.route('/getPostDetails/:Id')
    .get(function (req, res) {
        var id = req.query.Id;
        console.log(id);

        var postParser = new xml2js.Parser();
        fs.readFile(__dirname + './../../data/Comments.xml', function (err, data) {
            console.log("file error : " + err);
            postParser.parseString(data, function (err, result) {
                console.log("parsing error : " + err);

                // var filtered = _.where(result.comments.row, function(a){
                //     return a.$.PostId=== "2"});

                var filtered = result.comments.row.filter(function (a) {
                    return a.$.PostId === "2"
                });

                res.send(filtered);
            });
        });

    });

apiRouter.route('/gettagscount')
    .get(function (req, res) {
        var postParser = new xml2js.Parser();
        fs.readFile(__dirname + './../../data/Tags.xml', function (err, data) {
            console.log("file error : " + err);
            postParser.parseString(data, function (err, result) {
                console.log("parsing error : " + err);

                res.send(result);
            });
        });
    });

module.exports = apiRouter;