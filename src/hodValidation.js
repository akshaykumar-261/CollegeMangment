import Joi from "joi";
export const createHodSchema = Joi.object({
  user_Id: Joi.number().integer().required(),
  college_Id: Joi.number().integer().required(),
  department_Id: Joi.number().integer().required(),
  is_active: Joi.number().valid(0, 1).optional(),
});

export const updateHodSchema = Joi.object({
  user_Id: Joi.number().integer().optional(),
  college_Id: Joi.number().integer().optional(),
  department_Id: Joi.number().integer().optional(),
  is_active: Joi.number().valid(0, 1).optional(),
});

export const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
};
