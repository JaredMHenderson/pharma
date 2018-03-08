const express = require("express");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const app = express();
=======
// const pharmacy = require('pharmacy.js');
>>>>>>> 2a56a39c1e9b63503b00b99d5001ddc34849b7cc

const port = process.env.port || 3000;

const db = require("./models");

const exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
app.use(express.static("public"));

app.use(express.static("public"));

db.sequelize.sync({ force: false }).then(function () {
  app.listen(port, function () {
    console.log("App listening on port " + port);
  });
});
