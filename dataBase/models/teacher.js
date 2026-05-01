import pkg from "sequelize";
const { DataTypes } = pkg;
import { sequelize } from "../../config/db.js";
const Teacher = sequelize.define(
  "Teacher",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    hod_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "hods",
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
    tableName: "teachers",
    timestamps: true,
  },
);
export default Teacher;
