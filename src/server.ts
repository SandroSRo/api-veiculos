import express from 'express';
import vehicleRoutes from './interfaces/routes/vehicleRoutes';
import { connectDB } from './core/connection/db';
import specs from './core/documentation/swagger';
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser')

require('dotenv').config();

const app = express();

const PORT = process.env.PORT

app.use(bodyParser.json());

connectDB();

app.use('/api/vehicles',vehicleRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
