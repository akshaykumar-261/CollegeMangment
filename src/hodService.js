import { Op } from "sequelize";
import HODModel from "../dataBase/models/HOD.js";
import User from "../dataBase/models/user.js";
import College from "../dataBase/models/college.js";
import Department from "../dataBase/models/department.js";

export const createHodDetail = async (data) => {
  return await HODModel.create(data);
};

export const findHodDetail = async (user_Id) => {
  return await HODModel.findOne({
    where: { user_Id },
  });
};

export const findHodDetailById = async (id) => {
  return await HODModel.findByPk(id);
};

export const updateHodDetail = async (id, data) => {
  return await HODModel.update(data, {
    where: { id },
  });
};

export const deleteHodDetail = async (id) => {
  return await HODModel.destroy({
    where: { id },
  });
};

export const getAllHod = async ({ page = 1, limit = 10, search = "" }) => {
  const offset = (page - 1) * limit;

  const whereCondition = search
    ? {
        [Op.or]: [
          { user_Id: { [Op.like]: `%${search}%` } },
          { college_Id: { [Op.like]: `%${search}%` } },
          { department_Id: { [Op.like]: `%${search}%` } },
        ],
      }
    : {};

  const { count, rows } = await HODModel.findAndCountAll({
    where: whereCondition,
    limit: parseInt(limit),
    offset: parseInt(offset),
    include: [
      {
        model: User,
        attributes:["id","first_name","last_name","email"],
      },
      {
        model: College,
        attributes:["id","college_name"],
      },
      {
        model: Department,
        attributes:["id","dept_name"],
      }
    ]
  });

  return {
    total: count,
    page: parseInt(page),
    limit: parseInt(limit),
    hods: rows,
  };
};
