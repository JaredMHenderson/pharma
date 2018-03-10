const express = require("express");
const bodyParser = require("body-parser");
// const pharmacy = require('pharmacy.js');

const PORT = process.env.PORT || 3000;
const app = express();

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

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
  });
});
