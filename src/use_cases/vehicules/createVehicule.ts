import BaseRepository from "../../core/generic/baseRepository";
import VehicleModel, { IVehicle } from "../../entities/mongodb/vehicleModel";

class CreateVehicle {
  private repository: BaseRepository<IVehicle>;

  constructor() {
    this.repository = new BaseRepository<IVehicle>(VehicleModel);
  }

  async addVehicle(
    brand: string,
    vehicleModel: string,
    year: number
  ): Promise<IVehicle | String> {
    if (!(await this.validate(brand, vehicleModel, year))) {
      return this.repository.add({ brand, vehicleModel, year });
    } else {
      throw new Error("Vehicule is exist in database");
    }
  }

  async validate(brand: string, vehicleModel: string, year: number) {
    const vehiculeExist = await this.repository.count({
      brand: brand,
      vehicleModel: vehicleModel,
      year: year,
    });
    return vehiculeExist ? true : false;
  }
}

export default CreateVehicle;
