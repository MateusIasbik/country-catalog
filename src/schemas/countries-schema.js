import Joi from 'joi';

export const ratingSchema = Joi.object({
  country: Joi.string().required(),
  liked: Joi.boolean().required(),
});
