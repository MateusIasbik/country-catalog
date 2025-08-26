import express from 'express';
import dotenv from 'dotenv';
import countriesRoutes from './src/routes/countries-route.js';
import errorHandler from './src/middlewares/error.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/paises', countriesRoutes);
app.use(errorHandler);

export default app;