import httpStatus from "http-status";

export function validateSchema(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    if (validation.error) {
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(validation.error.details.map(detail => detail.message));
    }

    next();
  };
}