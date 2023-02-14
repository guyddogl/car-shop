import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/carODM';

class CarService {
  private createNewCarDomain(car: ICar): Car | null { return new Car(car); }

  public async createNewCar(car: ICar) { 
    const carODM = new CarODM();
    const newCar = await carODM.createNewVehicle(car);
    return this.createNewCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.getAllVehicles();
    return cars.map((e) => this.createNewCarDomain(e));
  }

  public async getCarByID(id: string) {
    const carODM = new CarODM();
    const cars = await carODM.getVehicleById(id);
    if (cars === undefined) return undefined;
    return cars.map((e: ICar) => this.createNewCarDomain(e));
  }

  public async updateCar(id: string, car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.updateVehicle(id, car);
    if (newCar === undefined) return undefined;
    if (newCar === null) return null;
    return this.createNewCarDomain(newCar);
  }
}

export default CarService;