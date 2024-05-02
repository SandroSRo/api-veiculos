import mongoose from 'mongoose';

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect('mongodb+srv://sandro:qweasd123@cluster0.udyx8up.mongodb.net/veiculos');
    console.log('Conexão estabelecida com sucesso');
  } catch (error) {
    console.error('Erro de conexão:', error);
    process.exit(1);
  }
}

export function closeDB(): Promise<void> {
  return mongoose.connection.close();
}
