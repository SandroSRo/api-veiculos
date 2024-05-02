import request from 'supertest';
import VehicleModel, { IVehicle } from '../../entities/mongodb/vehicleModel';
import app from '../../../server';

describe('Tests for route /api/vehicles', () => {
  beforeAll(async () => {
    await VehicleModel.deleteMany({});
  });

  it('Should add one vehicule', async () => {
    const vehicleData = { brand: 'TestBrand', vehicleModel: 'TestModel', year: 2022 };

    const response = await request(app)
      .post('/api/vehicles')
      .send(vehicleData)
      .expect(201);

    expect(response.body.brand).toBe(vehicleData.brand);
    expect(response.body.vehicleModel).toBe(vehicleData.vehicleModel);
    expect(response.body.year).toBe(vehicleData.year);
  });

  it('Should return all vehicles', async () => {
    const response = await request(app).get('/api/vehicles').expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('Should update one vehicule', async () => {
    const data = await request(app).get('/api/vehicles')
    const vehicleData = { brand: 'TestBrand-Update', vehicleModel: 'TestModel-Update', year: 2025 };

    const id = data.body[0]._id
    const response = await request(app)
      .put(`/api/vehicles/${id}`)
      .send(vehicleData)
      .expect(200);

    expect(response.body.brand).toBe(vehicleData.brand);
    expect(response.body.vehicleModel).toBe(vehicleData.vehicleModel);
    expect(response.body.year).toBe(vehicleData.year);
  });

  it('Should deleted one vehicule', async () => {
    const data = await request(app).get('/api/vehicles')

    const id = data.body[0]._id
    const response = await request(app)
      .delete(`/api/vehicles/${id}`)
      .expect(200);
  });

  it('Should failed in deleted one vehicule', async () => {
    const data = await request(app).get('/api/vehicles')

    const id = '123456789'
    const response = await request(app)
      .delete(`/api/vehicles/${id}`)
      .expect(500);
  });

  it('Should failed route', async () => {
    const data = await request(app).get('/api/vehicle').expect(404);
  });


  
});
