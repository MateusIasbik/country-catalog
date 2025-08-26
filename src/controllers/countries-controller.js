import { countriesService } from '../services/countries-service.js';
import httpStatus from "http-status";

async function listTop10(req, res, next) {
    try {
        const result = await countriesService.listTop10();
        return res.status(httpStatus.OK).json(result);
    } catch (error) {
        next(error);
    }
}

async function searchByName(req, res, next) {
    try {
        const { name } = req.query;
        const result = await countriesService.searchByName(name);
        return res.status(httpStatus.OK).json(result);
    } catch (error) {
        next(error);
    }
}

async function reviewCountry(req, res, next) {
    if (!req.body || !req.body.country || typeof req.body.liked !== 'boolean') {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    try {
        const { country, liked } = req.body;
        const result = await countriesService.reviewCountry(country, liked);
        return res.status(httpStatus.OK).json(result);
    } catch (error) {
        next(error);
    }
}
export const countriesController = {
    listTop10,
    searchByName,
    reviewCountry
}