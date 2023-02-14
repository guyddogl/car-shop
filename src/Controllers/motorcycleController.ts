import { Request, Response } from 'express';
import MotorcycleService from '../Services/motorcycleService';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private service: MotorcycleService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new MotorcycleService();
  }

  public async createNewMotorcycle() {
    if (this.req.body.status === undefined) this.req.body.status = false;
    const newCar = await this.service.createNewMotorcycle(this.req.body);
    return this.res.status(201).json(newCar);
  }

  public async getAllMotorcycles() {
    const motorcycles = await this.service.getAllMotorcycles();
    return this.res.status(200).json(motorcycles);
  }

  public async getMotorcycleByID() {
    const { id } = this.req.params;
    const car = await this.service.getMotorcycleByID(id);
    if (car?.length === 0) return this.res.status(404).json({ message: 'Motorcycle not found' });
    if (car === undefined) return this.res.status(422).json({ message: 'Invalid mongo id' });
    return this.res.status(200).json(...car);
  }
}

export default MotorcyclesController;