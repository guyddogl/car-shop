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

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.getAllCars();
    return cars.map((e) => this.createNewCarDomain(e));
  }

  public async getCarByID(id: string) {
    const carODM = new CarODM();
    const cars = await carODM.getCarByID(id);
    if (cars === undefined) return undefined;
    return cars.map((e: ICar) => this.createNewCarDomain(e));
  }
}

export default CarsService;