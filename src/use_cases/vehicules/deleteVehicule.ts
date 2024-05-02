import VehicleModel, { IVehicle } from "../../entities/mongodb/vehicleModel";
import BaseRepository from "../../core/generic/baseRepository";

class DeleteVehicle {
  private repository: BaseRepository<IVehicle>;

  constructor() {
    this.repository = new BaseRepository<IVehicle>(VehicleModel);
  }

  async deleteVehicle(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}

export default DeleteVehicle;
