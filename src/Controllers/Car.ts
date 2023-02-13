import { Request, Response } from 'express';
import CarService from '../Services/carService';

class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  public async createNewCar() {
    if (this.req.body.status === undefined) this.req.body.status = false;
    const newCar = await this.service.createNewCar(this.req.body);
    return this.res.status(201).json(newCar);
  }
}

export default CarController;