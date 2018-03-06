//Requiring our User and perscription models

const db = require('../models');

module.exports = function(app) {
    //Get route to get all users

    app.get('/api/patients', function(req, res) {
        db.Patient.findAll({})
        .then(function(dbPatient) {
            res.json(dbPatient);
        });
    });

    //Get Route for returning info about a specific User
    app.get('/api/patients/name/:name', function(req, res) {
        db.Patient.findAll({
            where: {
                name: req.params.name
            }
        })
        .then(function(dbPatient) {
            res.json(dbPatient);
        });
    });

    //Post Route For adding a new Patient
    app.post('/api/patients', function(req, res) {
        console.log(req.body);
        db.Patient.create({
            name: req.body.name,
            DOB: req.body.DOB,
            prescriptions: req.body.prescriptions
        })
        .then(function(dbPatient) {
            res.json(dbPatient);
        });   
    });

    //Delete route for deleting users
    app.delete('/api/patients/:name', function(req, res) {
        db.Patient.destroy({
            where:{
                name: req.params.name
            }
        })
        .then(function(dbPatient) {
            res.json(dbPatient);
        });
    });

    //Put route for updating User info
    app.put('/api/patients', function(req, res) {
        db.Patient.update(req.body,
        {
            where: {
                name: req.body.name
            }
        })
        .then(function(dbPatient) {
            res.json(dbPatient);
        });
    });


    //Post route for adding new prescription

    app.post('/api/prescriptions', function (req, res) {
        console.log(req.body);
        db.Prescription.create({
            name: req.body.name,
            category: req.body.category,
            stock: req.body.stock
        })
            .then(function (dbPatient) {
                res.json(dbPatient);
            });
    });
}