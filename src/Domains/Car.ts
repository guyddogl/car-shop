import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getCarDoorsQty() { return this.doorsQty; }
  public setCarDoorsQty(doorsQty: number) { this.doorsQty = doorsQty; }

  public getCarSeatsQty() { return this.seatsQty; }
  public setCarSeatsQty(seatsQty: number) { this.seatsQty = seatsQty; }
}

export default Car;