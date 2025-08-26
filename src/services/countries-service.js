import axios from 'axios';
import { countriesRepository } from '../repositories/countries-repository.js';

const API_URL = 'https://restcountries.com/v3.1';

async function listTop10() {
    const { data } = await axios.get(`${API_URL}/all?fields=name,population,continents`);

    const top10 = data.map(country => ({
        name: country.name.common,
        population: country.population,
        continent: country.continents?.[0],
    }))
        .sort((a, b) => b.population - a.population)
        .slice(0, 10);

    const result = await Promise.all(
        top10.map(async country => {
            const rating = await countriesRepository.getRatingByCountryName(country.name);
            return { ...country, ratings: rating };
        })
    );

    return result;
}

async function searchByName(name) {
    const { data } = await axios.get(`${API_URL}/name/${name}`);

    const country = data[0];

    const countryInfo = {
        name: country.name.common,
        population: country.population,
        continent: country.continents?.[0],
    };

    const rating = await countriesRepository.getRatingByCountryName(countryInfo.name);

    return { ...countryInfo, ratings: rating };
}

async function reviewCountry(country, liked) {
    await countriesRepository.saveRating(country, liked);

    const rating = await countriesRepository.getRatingByCountryName(country);

    return { country, ratings: rating, status: 'sucess' };
}

export const countriesService = {
    listTop10,
    searchByName,
    reviewCountry
}
