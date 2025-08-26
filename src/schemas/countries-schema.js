import joi from "joi";
import { AssetsDataWithoutId } from "../protocols";

export const countriesSchema = joi.object<AssetsDataWithoutId>({
    name: joi.string().required(),
    price: joi.number().positive().required(),
    amount: joi.number().min(0).required(),
    currentValue: joi.number().positive().required(),
    acquisitionValue: joi.number().positive().required(),
  });
