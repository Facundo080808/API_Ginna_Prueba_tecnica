import express, { Request, Response } from 'express';
import { router } from './router';
import { enviromentVariables } from './utils/enviromentVariables';
import { connectToMongoDB } from './DbConnection';

const app = express();
const PORT = enviromentVariables.PORT

app.use(express.json()); // Middleware para analizar JSON

app.use('/api', router);

connectToMongoDB()
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
