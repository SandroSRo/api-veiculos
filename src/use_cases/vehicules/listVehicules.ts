import VehicleModel, { IVehicle } from "../../entities/mongodb/vehicleModel";
import BaseRepository from "../../core/generic/baseRepository";

class ListVehicle {
  private repository: BaseRepository<IVehicle>;

  constructor() {
    this.repository = new BaseRepository<IVehicle>(VehicleModel);
  }

  async getAllVehicles(): Promise<IVehicle[]> {
    return this.repository.getAll();
  }
}

export default ListVehicle;
