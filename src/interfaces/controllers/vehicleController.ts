import { NextFunction } from './../../../node_modules/@types/express-serve-static-core/index.d';
import { Request, Response } from 'express';
import { CreateVehicleDTO } from '../dtos/createVehicleDTO';
import CreateVehicle from '../../use_cases/vehicules/createVehicule';
import FindVehicle from '../../use_cases/vehicules/findVeicules';
import ListVehicle from '../../use_cases/vehicules/listVehicules';
import DeleteVehicle from '../../use_cases/vehicules/deleteVehicule';
import UpdateVehicle from '../../use_cases/vehicules/updateVehicules';
import { UpdateVehicleDTO } from '../dtos/updateVehicleDTO';
import { validate } from 'class-validator';


const vehicleCreateUseCases = new  CreateVehicle();
const vehicleFindUseCases = new  FindVehicle();
const vehicleListUseCases = new  ListVehicle();
const vehicleDeleteUseCases = new  DeleteVehicle();
const vehicleUpdateUseCases = new  UpdateVehicle();

export async function getAllVehicles(req: Request, res: Response): Promise<void> {
  try {
    const vehicles = await vehicleListUseCases.getAllVehicles();
    res.json(vehicles);
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
}

export async function getVehicleById(req: Request, res: Response): Promise<void> {
  try {
    const vehicle = await vehicleFindUseCases.getVehicleById(req.params.id);
    res.json(vehicle);
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
}

export async function addVehicle(req: Request, res: Response ,next: NextFunction): Promise<void> {

  const { brand, vehicleModel, year }: CreateVehicleDTO = req.body;

  //validando os dados
  const data = new CreateVehicleDTO(
    brand, vehicleModel, year 
  )  
  const errors = await validate(data);

  if (errors.length) {
    res.status(500).json({ message: errors });
  }

  try {
    const newVehicle = await vehicleCreateUseCases.addVehicle(brand, vehicleModel, year);
    res.status(201).json(newVehicle);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
}

export async function updateVehicle(req: Request, res: Response): Promise<void> {
  try {
    const { brand, vehicleModel, year }: UpdateVehicleDTO = req.body;
    const updatedVehicle = await vehicleUpdateUseCases.updateVehicle(req.params.id, brand, vehicleModel, year);
    res.json(updatedVehicle);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
}

export async function deleteVehicle(req: Request, res: Response): Promise<void> {
  try {
    await vehicleDeleteUseCases.deleteVehicle(req.params.id);
    res.json({ message: 'Vehicle deleted successfully' });
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
}
