const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
routes.delete('/ongs/:name', ongController.delete);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;