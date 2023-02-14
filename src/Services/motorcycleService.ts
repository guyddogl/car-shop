import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/motorcycleODM';
import Motorcycle from '../Domains/Motorcycle';

class MotorcycleService {
  private createNewMotorDomain(motor: IMotorcycle): Motorcycle | null { 
    return new Motorcycle(motor); 
  }

  public async createNewMotorcycle(motor: IMotorcycle) { 
    const motorODM = new MotorcycleODM();
    const newMotor = await motorODM.createNewVehicle(motor);
    return this.createNewMotorDomain(newMotor);
  }

  public async getAllMotorcycles() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getAllVehicles();
    return motorcycles.map((e) => this.createNewMotorDomain(e));
  }

  public async getMotorcycleByID(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getVehicleById(id);
    if (motorcycles === undefined) return undefined;
    return motorcycles.map((e: IMotorcycle) => this.createNewMotorDomain(e));
  }

  public async updateMotorcycle(id: string, motor: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.updateVehicle(id, motor);
    if (motorcycles === undefined) return undefined;
    if (motorcycles === null) return null;
    return this.createNewMotorDomain(motorcycles);
  }
}

export default MotorcycleService;