import express from 'express';
import connection from './database/connection';
import convertHourToMinutes from './utils/convertHoursToMinutes';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();



routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);


routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;