
import Joi from "joi";
export const userCreateSchema = Joi.object({
  first_name: Joi.string().min(2).max(50).required(),
  last_name: Joi.string().min(2).max(50).optional(),
  email: Joi.string().email().required(),
  phone_no: Joi.number().optional(),
  address: Joi.string().optional(),
  password: Joi.string().min(6).required(),
  role_id: Joi.number().required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const userUpdateSchema = Joi.object({
  first_name: Joi.string().min(2).max(50).optional(),
  last_name: Joi.string().min(2).max(50).optional(),
  phone_no: Joi.number().optional(),
  address: Joi.string().optional(),
  role_id: Joi.number().optional(),
  is_active: Joi.number().valid(0, 1).optional(),
});

export const idParamSchema = Joi.object({
  id: Joi.number().integer().required(),
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
