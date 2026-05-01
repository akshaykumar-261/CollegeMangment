import Joi from "joi";

export const teacherValidation = Joi.object({
  subject: Joi.string().optional().required(),

  user_Id: Joi.number().integer().required(),

  hod_Id: Joi.number().integer().required(),

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
