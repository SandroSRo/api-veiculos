import { Document, model, Schema } from 'mongoose';

export interface IVehicle extends Document {
  brand: string;
  vehicleModel: string;
  year: number;
}

const vehicleSchema = new Schema<IVehicle>({
  brand: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  year: { type: Number, required: true }
});

const VehicleModel = model<IVehicle>('Vehicle', vehicleSchema);

export default VehicleModel;
