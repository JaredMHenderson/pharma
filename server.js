const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.port || 3000;
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

db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function() {
    console.log("App listening on port " + port);
  });
});

