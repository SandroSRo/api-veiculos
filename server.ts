import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import express from 'express';
import { connectDB } from './src/core/connection/db';
import specs from './src/core/documentation/swagger';
import vehicleRoutes from './src/routes/vehicleRoutes';
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

connectDB();



app.use('/api/vehicles',vehicleRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
