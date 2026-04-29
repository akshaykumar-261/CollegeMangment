import pkg from "sequelize";
const { DataTypes } = pkg
import { sequelize } from "../../config/db.js";
const College = sequelize.define(
  "College",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    college_Name: {
      type: DataTypes.STRING,
      alloNull: true,
    },
    college_Email: {
      type: DataTypes.STRING,
      alloNull: true,
    },
    college_Phone_No: {
      type: DataTypes.INTEGER(10),
      alloNull: true,
    },
    location: {
      type: DataTypes.STRING,
      alloNull: true,
    },
    establishedYear: {
      type: DataTypes.STRING,
      alloNull: true,
    },
    user_Id: {
      // for giving principle to college
      type: DataTypes.INTEGER,
      alloNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1, // active: 1 , Incative: 0
    },
  },
  {
    tableName: "colleges",
    timestamps: true,
  },
);
export default College;
