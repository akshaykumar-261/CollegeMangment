import pkg from "sequelize";
const { DataTypes } = pkg;
import { sequelize } from "../config/db.js";
const Role = sequelize.define(
  "Role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role_name: {
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
    tableName: "roles",
    timestamps: true,
  },
);
export default Role;
