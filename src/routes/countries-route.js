import { Router } from 'express';
import { countriesController } from '../controllers/countries-controller.js';
import { validateSchema } from '../schemas/schema-middleware.js';
import { ratingSchema } from '../schemas/countries-schema.js';

const countriesRoutes = Router();

countriesRoutes.get('/top10', countriesController.listTop10);
countriesRoutes.get('/buscar', countriesController.searchByName);
countriesRoutes.post('/avaliar', validateSchema(ratingSchema), countriesController.reviewCountry);

export default countriesRoutes;