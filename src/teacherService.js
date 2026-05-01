import { Op } from "sequelize";
import TeacherModel from "../dataBase/models/teacher.js";
import HODModel from "../dataBase/models/HOD.js";
import User from "../dataBase/models/user.js";
import College from "../dataBase/models/college.js";
import Department from "../dataBase/models/department.js";

export const createTeacherDetail = async (data) => {
  return await TeacherModel.create(data);
};

export const findTeacherDetail = async (user_Id) => {
  return await TeacherModel.findOne({
    where: { user_Id },
  });
};

export const findTeacherDetailById = async (id) => {
  return await TeacherModel.findByPk(id, {
    include: [
      { model: User, attributes: ["id", "first_name", "email"] },
      {
        model: HODModel,
        include: [
          { model: College, attributes: ["id", "college_Name"] },
          { model: Department, attributes: ["id", "dept_name"] },
        ],
      },
    ],
  });
};

export const updateTeacherDetail = async (id, data) => {
  return await TeacherModel.update(data, {
    where: { id },
  });
};

export const deletetTeacherDetail = async (id) => {
  return await TeacherModel.destroy({
    where: { id },
  });
};

export const getAllTeacher = async ({ page = 1, limit = 10, search = "" }) => {
  const offset = (page - 1) * limit;

  const whereCondition = search
    ? {
        subject: { [Op.like]: `%${search}%` },
      }
    : {};

  const { count, rows } = await TeacherModel.findAndCountAll({
    where: whereCondition,
    limit: parseInt(limit),
    offset: parseInt(offset),
    include: [
      {
        model: User,
        attributes: ["id", "first_name", "last_name", "email"],
      },
      {
        model: HODModel,
        include: [
          {
            model: College,
            attributes: ["id", "college_Name"],
          },
          {
            model: Department,
            attributes: ["id", "dept_name"],
          },
        ],
      },
    ],
  });

  return {
    total: count,
    page: parseInt(page),
    limit: parseInt(limit),
    teachers: rows,
  };
};
