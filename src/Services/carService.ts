import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/carODM';

class CarsService {
  private createNewCarDomain(car: ICar): Car | null {
    if (car) { return new Car(car); }
    return null;
  }

  public async createNewCar(car: ICar) { 
    const carODM = new CarODM();
    const newCar = await carODM.createNewCar(car);
    return this.createNewCarDomain(newCar);
  }
}

export default CarsService;