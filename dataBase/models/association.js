import User from "./user.js";
import Role from "./roles.js";
import College from "./college.js";
import Department from "./department.js";

// 🔹 User ↔ Role
User.belongsTo(Role, { foreignKey: "role_id" });
Role.hasMany(User, { foreignKey: "role_id" });

// 🔹 College ↔ Department (Many-to-Many)
College.belongsToMany(Department, {
  through: "college_departments",
  foreignKey: "college_id",
});

Department.belongsToMany(College, {
  through: "college_departments",
  foreignKey: "department_id",
});

export { User, Role, College, Department };