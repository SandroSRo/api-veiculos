import { IsString, IsInt, Min, Max } from "class-validator";

export class CreateVehicleDTO {
  constructor(brand: string, vehicleModel: string, year: number) {
    this.brand = brand;
    this.vehicleModel = vehicleModel;
    this.year = year;
  }
  @IsString()
  brand: string;
  @IsString({message:"Vehicle model is string"})
  vehicleModel: string;
  @IsInt({ message: 'O ano deve ser um número inteiro.' })
  @Min(1900, { message: 'O ano mínimo permitido é 1900.' })
  @Max(new Date().getFullYear(), { message: `O ano máximo permitido é ${new Date().getFullYear()}.` })
  year: number;
}
