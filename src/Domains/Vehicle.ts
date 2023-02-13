import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined ;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status;
    this.buyValue = vehicle.buyValue;
  }

  public getVehicleId() { return this.id; }
  public setVehicleId(id: string) { this.id = id; }

  public getVehicleModel() { return this.model; }
  public setVehicleModel(model: string) { this.model = model; }

  public getVehicleYear() { return this.year; }
  public setVehicleYear(year: number) { this.year = year; }

  public getVehicleColor() { return this.color; }
  public setVehicleColor(color: string) { this.color = color; }

  public getVehicleStatus() { return this.status; }
  public setVehicleStatus(status: boolean) { this.status = status; }

  public getVehicleBuyValue() { return this.buyValue; }
  public setVehicleBuyValue(buyValue: number) { this.buyValue = buyValue; }
}

export default Vehicle;