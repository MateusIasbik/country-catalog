import prisma from '../database.js';

async function getRatingByCountryName(country) {
    const likes = await prisma.countryRating.count({
        where: {
            country,
            liked: true
        }
    });

    const dislikes = await prisma.countryRating.count({
        where: {
            country,
            liked: false
        }
    });

    return { likes, dislikes };
}

async function saveRating(country, liked) {
    await prisma.countryRating.create({
        data: {
            country,
            liked
        }
    });
}

export const countriesRepository = {
    getRatingByCountryName,
    saveRating
}

