import CollegeModel from "../dataBase/models/college.js";
import Department from "../dataBase/models/department.js";
import { Op } from "sequelize";
export const createCollege = async (data) => {
  return await CollegeModel.create(data);
};
export const findCollege = async (college_Email) => {
  return await CollegeModel.findOne({ where: { college_Email } });
};
export const findCollegeById = async (id) => {
  return await CollegeModel.findByPk(id);
};
export const updateCollege = async (id, data) => {
  return await CollegeModel.update(data, {
    where: { id },
  });
};
export const deleteCollege = async (id) => {
  const college = await CollegeModel.findByPk(id);
  if (!college) return 0;
  // remove many-to-many associations in the join table
  await college.setDepartments([]);
  return await CollegeModel.destroy({ where: { id } });
};
export const getAllCollege = async ({ page, limit, search }) => {
  const offset = (page - 1) * limit;
  const whereCondition = search
    ? {
        [Op.or]: [
          { college_Email: { [Op.like]: `%${search}%` } },
          { college_Name: { [Op.like]: `%${search}%` } },
          { location: { [Op.like]: `%${search}%` } },
        ],
      }
    : {};
  const { count, rows } = await CollegeModel.findAndCountAll({
    where: whereCondition,
    include: Department,
    limit: parseInt(limit),
    offset: parseInt(offset),
  });

  return {
    total: count,
    page: parseInt(page),
    limit: parseInt(limit),
    college: rows,
  };
};
