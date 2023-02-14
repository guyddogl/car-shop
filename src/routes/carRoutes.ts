import { Router } from 'express';
import CarController from '../Controllers/Car';

const routers = Router();

routers.post('/', (req, res) => new CarController(req, res).createNewCar());
routers.get('/:id', (req, res) => new CarController(req, res).getCarByID());
routers.get('/', (req, res) => new CarController(req, res).getAllCars());
routers.put('/:id', (req, res) => new CarController(req, res).updateCar());

export default routers;