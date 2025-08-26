import { Router } from 'express';
import { countriesController } from '../controllers/countries-controller.js';

const countriesRoutes = Router();

countriesRoutes.get('/top10', countriesController.listTop10);
countriesRoutes.get('/buscar', countriesController.searchByName);
countriesRoutes.post('/avaliar', countriesController.reviewCountry);

export default countriesRoutes;