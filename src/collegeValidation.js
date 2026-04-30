import Joi from "joi";
export const collegeCreateSchema = Joi.object({
  college_Name: Joi.string().min(2).max(50).required(),
  college_Email: Joi.string().min(2).max(50).optional(),
  college_Phone_No: Joi.number().optional(),
  location: Joi.string().optional(),
  establishedYear: Joi.string().optional(),
  user_Id: Joi.number().required(),
  department_ids: Joi.required(),
});

export const collegeUpdateSchema = Joi.object({
  college_Name: Joi.string().min(2).max(50).optional(),
  college_Email: Joi.string().min(2).max(50).optional(),
  college_Phone_No: Joi.number().optional(),
  location: Joi.string().optional(),
  user_Id: Joi.number().optional(),
  department_ids: Joi.optional(),
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
