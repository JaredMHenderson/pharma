//Requiring our User and perscription models

const db = require('../models');

module.exports = function(app) {
    //Get route to get all users

    app.get('api/users/', function(req, res) {
        db.User.findAll({})
        .then(function(dbUser) {
            res.json(dbUser);
        });
    });

    //Get Route for returning info about a specific User
    app.get('/api/users/name/:name', function(req, res) {
        db.User.findAll({
            where: {
                name: req.params.name
            }
        })
        .then(function(dbUser) {
            res.json(dbUser);
        });
    });

    //Post Route For adding a new User
    app.post('/api/users', function(req, res) {
        console.log(req.body);
        db.User.create({
            name: req.body.name,
            DOB: req.body.DOB,
            prescriptions: req.body.prescriptions
        })
        .then(function(dbUser) {
            res.json(dbUser);
        });   
    });

    //Delete route for deleting users
    app.delete('/api/users/:name', function(req, res) {
        db.User.destroy({
            where:{
                name: req.params.name
            }
        })
        .then(function(dbUser) {
            res.json(dbUser);
        });
    });

    //Put route for updating User info
    app.put('/api/users', function(req, res) {
        db.User.update(req.body,
        {
            where: {
                name: req.body.name
            }
        })
        .then(function(dbUser) {
            res.json(dbPost);
        });
    });
}