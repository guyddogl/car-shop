import { Router } from 'express';
import MotorcyclesController from '../Controllers/motorcycleController';

const routers = Router();

routers.post('/', (req, res) => new MotorcyclesController(req, res).createNewMotorcycle());
routers.get('/:id', (req, res) => new MotorcyclesController(req, res).getMotorcycleByID());
routers.get('/', (req, res) => new MotorcyclesController(req, res).getAllMotorcycles());
routers.put('/:id', (req, res) => new MotorcyclesController(req, res).updateMotorcycle());

export default routers;