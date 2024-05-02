import VehicleModel, { IVehicle } from "../../entities/mongodb/vehicleModel";
import BaseRepository from "../../core/generic/baseRepository";

class UpdateVehicle {
  private repository: BaseRepository<IVehicle>;

  constructor() {
    this.repository = new BaseRepository<IVehicle>(VehicleModel);
  }

  async updateVehicle(
    id:string,
    brand: string,
    vehicleModel: string,
    year: number
  ):  Promise<IVehicle | null> {
    if (!(await this.validate(brand, vehicleModel, year))) {
    return this.repository.update(id, { brand, vehicleModel, year });
    }else{
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

export default UpdateVehicle;
