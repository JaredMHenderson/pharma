//Requiring our User and perscription models

const db = require('../models');

module.exports = function(app) {
    //Get route to get all patients

    app.get('/api/patients', function(req, res) {
        db.Patient.findAll({})
        .then(function(dbPatient) {
            res.json(dbPatient);
        });
    });

    //Get Route for returning info about a specific Patient
    app.get('/api/patients/:id', function(req, res) {

        db.Patient.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbPatient) {
            res.render("updatePatient", {patient: dbPatient[0]});
        });
    });

    //Post Route For adding a new Patient
    app.post('/api/patients', function(req, res) {
        console.log(req.body);
        db.Patient.create({
            name: req.body.name,
            DOB: req.body.DOB,
            prescription: req.body.prescription,
            comments: req.body.comments
        })
        .then(function(dbPatient) {
            res.json(dbPatient);
        });
    });

    //Delete route for deleting patients
    app.delete('/api/patients/:id', function(req, res) {
        db.Patient.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(function(dbPatient) {
            res.json(dbPatient);
        });
    });

    //Put route for updating Patient info
    app.put('/api/patients/:id', function(req, res) {
        console.log("THIS IS OUR BODY", req.body);
        db.Patient.update(req.body,
        {
            where: {

                id: req.params.id

            }
        })
        .then(function(dbPatient) {
            res.json(dbPatient);
        });
    });
}
