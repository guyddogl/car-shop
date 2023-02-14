import { Request, Response } from 'express';
import CarService from '../Services/carService';
import ICar from '../Interfaces/ICar';

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

  public async getAllCars() {
    const cars = await this.service.getAllCars();
    return this.res.status(200).json(cars);
  }

  public async getCarByID() {
    const { id } = this.req.params;
    const car = await this.service.getCarByID(id);
    if (car?.length === 0) return this.res.status(404).json({ message: 'Car not found' });
    if (car === undefined) return this.res.status(422).json({ message: 'Invalid mongo id' });
    return this.res.status(200).json(...car);
  }

  public async updateCar() {
    const { id } = this.req.params;

    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    const result = await this.service.updateCar(id, car);
    
    if (result === null) return this.res.status(404).json({ message: 'Car not found' });
    if (result === undefined) return this.res.status(422).json({ message: 'Invalid mongo id' });
    return this.res.status(200).json(result);
  }
}

export default CarController;