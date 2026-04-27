import pkg from "sequlize";
import { DataTypes } from "pkg";
import { sequelize } from "../config/db.js";
const Department = sequelize.define(
  "Department",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dept_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "departments",
    timestamps: true,
  },
);
export default Department;
