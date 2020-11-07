const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const characterController = require('./controllers/characterController');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/characterRoutes')(app);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

characterController.fillInitData();
module.exports = app;