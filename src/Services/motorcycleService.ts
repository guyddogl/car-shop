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
}

export default MotorcycleService;