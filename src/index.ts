import express, { Request, Response } from 'express';
import { router } from './router';
import { enviromentVariables } from './utils/enviromentVariables';
import { connectToMongoDB } from './DbConnection';
import cors from 'cors';
import CustomError from './utils/customErrors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

//import ola from '../src/docs/'
const app = express();
const PORT = enviromentVariables.PORT

app.use(express.json()); 
app.use(cors());
//router
app.use('/api', router);

//DB
connectToMongoDB()

//Middleware de errores
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    })
  } else {
    console.error('Error:', err.message)
    console.error('Stack trace:', err.stack)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
})

//Swagger
const swaggerPath = path.join(__dirname, '../src/docs/swagger.yml');
const swaggerDocument = YAML.load(swaggerPath)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, () => {
  console.log(`Server in http://localhost:${PORT}`);
});

app.use((_req: Request, res: Response) => {
  res.status(404).send('Ruta no encontrada :/')
})