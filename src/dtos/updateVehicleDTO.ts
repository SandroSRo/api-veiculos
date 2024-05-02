import { IsString, IsInt, Min, Max } from "class-validator";

export class UpdateVehicleDTO {
  constructor(brand: string, vehicleModel: string, year: number) {
    this.brand = brand;
    this.vehicleModel = vehicleModel;
    this.year = year;
  }
  @IsString()
  brand: string;
  @IsString()
  vehicleModel: string;
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear())
  year: number;
}
