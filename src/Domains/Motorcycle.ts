import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motor: IMotorcycle) {
    super(motor);
    this.category = motor.category;
    this.engineCapacity = motor.engineCapacity;
  }

  public getEngineCapacity() { return this.engineCapacity; }
  public setEngineCapacity(engineCapacity: number) { this.engineCapacity = engineCapacity; }

  public getCategory() { return this.engineCapacity; }
  public setCategory(category: string) { this.category = category; }
}

export default Motorcycle;