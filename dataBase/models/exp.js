import { allow, types } from "joi";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "Exp",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    first_name: {
      type: DataTypes.STRING,
    },

    last_name: {
      type: DataTypes.STRING,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      }, // 1=Admin, 2=HOD, 3=Teacher, 4=Student
    },

    // Student specific
      roll_No: {
          type: DataTypes.INTEGER,
        allowNull: false,
      },
      course_Id: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },

    // Teacher specific
      subject: {
          type: DataTypes.STRING,
          allowNull: false,
      },

    // HOD specific
    department_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "department",
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
    tableName: "users",
    timestamps: true,
  },
);
