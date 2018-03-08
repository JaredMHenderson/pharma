const express = require('express');
const path = require('path');
const db = require("../models");


module.exports = function(app) {

  // app.use(express.static(path.join(__dirname, "../public")));

  app.get("/style.css", function(req, res) {
    res.append('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });

  app.get("/", function(req, res) {
    res.render("index");
  });


<<<<<<< HEAD
=======
  app.get("/home", function(req, res)
  {
    db.Patient.findAll().then(function(data)
    {
      res.render("home", {patients: data});
    });

  });

>>>>>>> 2a56a39c1e9b63503b00b99d5001ddc34849b7cc
  app.get("/newPatientForm", function(req, res) {
    res.render("newPatientForm");
  });

  app.get("/prescription", function(req, res) {
    res.render("prescription");
  });
<<<<<<< HEAD
=======

  app.get("/updatePatient", function(req, res) {
    res.render("updatePatient");
  });
>>>>>>> 2a56a39c1e9b63503b00b99d5001ddc34849b7cc

};
