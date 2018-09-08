var express = require("express");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.static('./app/dist'));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});