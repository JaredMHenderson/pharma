# pharma
QuickClinic is an app for pharmacists to use to keep track of their patients and medications.

Upon opening the app, the pharmacist will be given a list of recent patients, displaying their name, DOB, prescriptions, and comments. 

The pharmacist can add patients and prescriptions, delete patients and prescriptions, and update prescriptions.



ABOUT Snow Scout:

Quick clinic was a Project II assignment. Instructions were as follows:

Coding Requirements

Requirements

Your project must:


Use a Node and Express Web Server;
Be backed by a MySQL Database an ORM (not necessarily Sequelize);
Have both GET and POST routes for retrieving and adding new data;
Be deployed using Heroku (with Data);
Utilize at least one new library, package, or technology that we haven’t discussed;
Have a polished frontend / UI;
Have folder structure that meets MVC Paradigm;
Meet good quality coding standards (indentation, scoping, naming).
Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md



Suggestions

Your project should:


Incorporate Basic Testing Framework, see Project Suggestions;
Use Handlebars for Server-Side Templating
Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)
Use an existing public dataset to power the database
Create a migration strategy for sharing data across team members.


TECH USED: HTML, CSS, JavaScript, Bootstrap, Express, MySQL

HIGHLIGHT CODE:

I used CSS Grid layout to create the front end styling. I found it very convenient and easy to use.
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

        // console.log("THIS IS OUR BODY", req.body);

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


CONCLUSION: 
	In completing this project, I learned how to use MySQL for an app. I also learned a lot about deploying websites to Heroku.

GRADE: A+

INSTRUCTOR COMMENT:

from David Hammond 
March 26th, 6:40 pm

I enjoyed your simplistic front end. I did have a few issues with the login, as I attempted to create a new user it seemed unhappy, but it let me log in and test anyways. I think this is a cool concept and would love to see further development.

FUTURE DEVELOPMENT:
