import express from 'express';
import { addVehicle, deleteVehicle, getAllVehicles, getVehicleById, updateVehicle } from '../controllers/vehicleController';
const vehicleRoutes = express.Router();

/**
 * @swagger
 * /api/vehicles:
 *   get:
 *     summary: Return a list whith all vehicles.
 *     responses:
 *       200:
 *         description: OK
 */
vehicleRoutes.get('/', getAllVehicles);

/**
 * @swagger
 * /api/vehicles/{id}:
 *   get:
 *     summary: Return a vehicule especific.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Veículo não encontrado
 */
vehicleRoutes.get('/:id', getVehicleById);

/**
 * @swagger
 * /api/vehicles:
 *   post:
 *     summary: Create one new vehicule.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               vehicleModel:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       201:
 *         description: vehicule created success
 *       400:
 *         description: Error in creation vehicule
 */
vehicleRoutes.post('/', addVehicle);

/**
 * @swagger
 * /api/vehicles/{id}:
 *   put:
 *     summary: Update details from onevehicule existing.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *               vehicleModel:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       200:
 *         description: vehicule updated success
 *       404:
 *         description: vehicule not found
 */
vehicleRoutes.put('/:id', updateVehicle);

/**
 * @swagger
 * /api/vehicles/{id}:
 *   delete:
 *     summary: Remove one vehicule especific
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: vehicule deleted success
 *       404:
 *         description: vehicule not found
 */
vehicleRoutes.delete('/:id', deleteVehicle);

export default vehicleRoutes;
