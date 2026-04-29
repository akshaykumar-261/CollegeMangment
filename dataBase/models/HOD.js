import pkg from "sequelize";
const { DataTypes } = pkg;
import { sequelize } from "../../config/db.js";
const HOD = sequelize.define(
  "HOD",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    college_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "colleges",
        key: "id",
      },
    },
    department_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "departments",
        key: "id",
      },
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1, // active: 1 , Incative: 0
    },
     createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "hods",
    timestamps: true,
  },
);
export default HOD;
