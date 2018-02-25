//require all npm packages
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const routes = require('./controllers/burgers_controller.js');
const exphbs = require('express-handlebars');
//set up PORT and express
const port = process.env.PORT || 3000;
const app = express();
//set up directory name and bodyparser
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use("/", routes);
//set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//port listener
app.listen(port, function() {
  console.log("Listening on port: " + port);
});