import { Router } from 'express';
import MotorcyclesController from '../Controllers/motorcycleController';

const routers = Router();

routers.post('/', (req, res) => new MotorcyclesController(req, res).createNewMotorcycle());
// routers.get('/:id', (req, res) => new CarController(req, res).getCarByID());
// routers.get('/', (req, res) => new CarController(req, res).getAllCars());
// routers.put('/:id', (req, res) => new CarController(req, res).updateCar());

export default routers;