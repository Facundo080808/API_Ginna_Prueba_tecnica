import mongoose from 'mongoose';
import { enviromentVariables } from './utils/enviromentVariables';

export const connectToMongoDB = async () => {
  try {
    const MONGODB_URI = enviromentVariables.MONGOURL; 

    if (!MONGODB_URI) {
      throw new Error("La variable de entorno MONGO_URL no está definida.");
    }

    await mongoose.connect(MONGODB_URI);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};