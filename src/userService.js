import { Op } from "sequelize";
import UserModel from "../dataBase/models/user.js";
export const createUser = async (data) => {
  return await UserModel.create(data);
};
export const findUser = async (email) => {
  return await UserModel.findOne({ where: { email } });
};
export const findUserById = async (id) => {
  return await UserModel.findByPk(id);
};
export const updateUser = async (id, data) => {
  return await UserModel.update(data, {
    where: { id },
  });
};
export const deleteUser = async (id) => {
  return await UserModel.destroy({
    where: { id },
  });
};
export const getAllUser = async ({ page, limit, search }) => {
  const offset = (page - 1) * limit;
  const whereCondition = search
    ? {
        [Op.or]: [
          { email: { [Op.like]: `%${search}%` } },
          { first_name: { [Op.like]: `%${search}%` } },
          { last_name: { [Op.like]: `%${search}%` } },
        ],
      }
    : {};
  const { count, rows } = await UserModel.findAndCountAll({
    where: whereCondition,
    limit: parseInt(limit),
    offset: parseInt(offset),
  });

  return {
    total: count,
    page: parseInt(page),
    limit: parseInt(limit),
    users: rows,
  };
};
