const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');
const characterController = require('./controllers/characterController');

/**
 * Setup server, express app and log request console
 */
const http = require('http');
const app = express();
app.use(cors());
app.use(logger('dev'));

/**
 * Setup entry data
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Routes of our server
 */
require('./routes/characterRoutes')(app);

/**
 * Server listener
 */
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
characterController.fillInitData();

module.exports = app;