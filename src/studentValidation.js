import Joi from "joi";

export const studentSchema = Joi.object({
  roll_No: Joi.number().required(),
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phone_no: Joi.string().optional(),
  address: Joi.string().optional(),
  course_Id: Joi.number().required(),
  teacher_Id: Joi.number().required(),
});

export const updateStudentSchema = Joi.object({
  roll_No: Joi.number().optional(),
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phone_no: Joi.string().optional(),
  address: Joi.string().optional(),
  course_Id: Joi.number().optional(),
  teacher_Id: Joi.number().optional(),
}).min(1); 

export const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
};
