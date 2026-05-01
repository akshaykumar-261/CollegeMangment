import pkg from "sequelize";
const { DataTypes } = pkg;
import { sequelize } from "../../config/db.js";
const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roll_No: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    phone_no: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    course_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "courses",
        key: "id",
      },
    },
    teacher_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "teachers",
        key: "id",
      },
    },
    is_active: {
      type: DataTypes.SMALLINT,
      defaultValue: 1,
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
    tableName: "students",
    timestamps: true,
  },
);
export default Student;
