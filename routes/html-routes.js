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


  app.get("/newPatientForm", function(req, res) {
    res.render("newPatientForm");
  });

  app.get("/prescription", function(req, res) {
    res.render("prescription");
  });

};
