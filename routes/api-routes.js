//Requiring our patient and perscription models

const db = require('../models');

module.exports = function(app) {
    //Get route to get all patients

    app.get('api/patients/', function(req, res) {
        db.Patient.findAll({})
        .then(function(dbPatient) {
            res.json(dbPatient);
        });
    });

    //Get Route for returning info about a specific patient
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

    //Post Route For adding a new patient
    app.post('/api/patients', function(req, res) {
        console.log(req.body);
        db.Patient.create({
            name: req.body.name,
            age: req.body.age,
            dosage: req.body.dosage
        })
        .then(function(dbPatient) {
            res.json(dbPatient);
        });   
    });

    //Delete route for deleting patients
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

    //Put route for updating patient info
    app.put('/api/patients', function(req, res) {
        db.Patient.update(req.body,
        {
            where: {
                name: req.body.name
            }
        })
        .then(function(dbPatient) {
            res.json(dbPost);
        });
    });
}