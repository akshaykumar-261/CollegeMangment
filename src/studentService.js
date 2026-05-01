import { Op } from "sequelize";
import Student from "../dataBase/models/student.js";
import Course from "../dataBase/models/course.js";
import Teacher from "../dataBase/models/teacher.js";

export const createStudent = async (data) => {
  return await Student.create(data);
};

export const findStudentById = async (id) => {
  return await Student.findByPk(id);
};

export const updateStudent = async (id, data) => {
  return await Student.update(data, {
    where: { id },
  });
};

export const deleteStudent = async (id) => {
  return await Student.destroy({
    where: { id },
  });
};

export const getAllStudents = async ({ page = 1, limit = 10, search = "" }) => {
  const offset = (page - 1) * limit;

  const whereCondition = search
    ? {
        [Op.or]: [
          { first_name: { [Op.like]: `%${search}%` } },
          { last_name: { [Op.like]: `%${search}%` } },
          { email: { [Op.like]: `%${search}%` } },
          { roll_No: { [Op.like]: `%${search}%` } },
        ],
      }
    : {};

  const { count, rows } = await Student.findAndCountAll({
    where: whereCondition,
    limit: parseInt(limit),
    offset: parseInt(offset),
    include: [
      {
        model: Course,
        attributes: ["id", "course_name"],
      },
    ],
  });

  return {
    total: count,
    page: parseInt(page),
    limit: parseInt(limit),
    students: rows,
  };
};