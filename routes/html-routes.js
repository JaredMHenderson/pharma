const express = require('express');
const path = require('path');

module.exports = function(app) {

  // app.use(express.static(path.join(__dirname, "../public")));

  app.get("/style.css", function(req, res) {
    res.append('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/home", function(req, res) {
    res.render("home");
  });

<<<<<<< HEAD
  app.get("/api/users", function(req, res) {
    console.log(res);
    res.render("home");
  });

=======

  app.get("/newPatientForm", function(req, res) {
    res.render("newPatientForm");
  });


>>>>>>> 299b42eed3ebebc188b882b6affd5ea49e634be3
};
