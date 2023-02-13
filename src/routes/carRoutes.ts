import { Router } from 'express';
import CarController from '../Controllers/Car';

const routers = Router();

routers.post('/', (req, res) => new CarController(req, res).createNewCar());

export default routers;