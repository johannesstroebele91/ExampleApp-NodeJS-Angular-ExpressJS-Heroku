const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/dist/NodeJS-Angular-ExpressJS-Heroku-ExampleApp')));

app.set('port', port);

app.listen(port, function() {
  console.log("running");
});

module.exports = app;
