import { Model, Schema, model, models, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async createNewCar(car: ICar): Promise<ICar> { return this.model.create({ ...car }); }

  public async getAllCars(): Promise<ICar[]> { return this.model.find(); }

  public async getCarByID(id: string): Promise<ICar[] | undefined> {
    if (!isValidObjectId(id)) return undefined;
    return this.model.find({ _id: id });
  }

  public async updateCar(id: string, car: ICar) {
    if (!isValidObjectId(id)) return undefined;
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...car },
      { new: true },
    );
  }
}

export default CarODM;