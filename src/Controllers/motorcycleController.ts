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
}

export default MotorcyclesController;