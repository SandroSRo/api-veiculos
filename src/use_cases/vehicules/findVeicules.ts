import VehicleModel, { IVehicle } from "../../entities/mongodb/vehicleModel";
import BaseRepository from "../../core/generic/baseRepository";

class FindVehicle {
  private repository: BaseRepository<IVehicle>;

  constructor() {
    this.repository = new BaseRepository<IVehicle>(VehicleModel);
  }

  async getVehicleById(id: string): Promise<IVehicle | null> {
    return this.repository.getById(id);
  }

}

export default FindVehicle;
