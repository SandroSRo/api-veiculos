import mongoose from 'mongoose';
require('dotenv').config();
export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(process.env.URL_MONGO);
    console.log('Conexão estabelecida com sucesso');
  } catch (error) {
    console.error('Erro de conexão:', error);
    process.exit(1);
  }
}

export function closeDB(): Promise<void> {
  return mongoose.connection.close();
}
