import College from "./college.js";
import Department from "./department.js";

College.belongsToMany(Department, {
    through: "college_departments",
    foreignKey: "college_id",
});
Department.belongsToMany(College, {
    through: "college_departments",
    foreignKey: "department_id",
});
export { College, Department };