import { Model, Schema, model, models, isValidObjectId } from 'mongoose';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;

  constructor() {
    this.schema = new Schema({});
    this.model = models.Vehicle || model('Vehicle', this.schema);
  }

  public async createNewVehicle(param: T): Promise<T> { return this.model.create({ ...param }); }

  public async getAllVehicles(): Promise<T[]> { return this.model.find(); }

  public async getVehicleById(id: string): Promise<T[] | undefined> {
    if (!isValidObjectId(id)) return undefined;
    return this.model.find({ _id: id });
  }

  public async updateVehicle(id: string, vehicle: object) {
    if (!isValidObjectId(id)) return undefined;
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...vehicle },
      { new: true },
    );
  }
}

export default AbstractODM;