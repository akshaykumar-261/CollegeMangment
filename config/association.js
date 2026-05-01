import User from "../dataBase/models/user.js";
import Role from "../dataBase/models/roles.js";
import College from "../dataBase/models/college.js";
import Department from "../dataBase/models/department.js";
import HOD from "../dataBase/models/HOD.js";
import Teacher from "../dataBase/models/teacher.js";
import Student from "../dataBase/models/student.js";
import Course from "../dataBase/models/course.js";
User.belongsTo(Role, { foreignKey: "role_id" });
Role.hasMany(User, { foreignKey: "role_id" });

College.belongsToMany(Department, {
  through: "college_departments",
  foreignKey: "college_id",
});

Department.belongsToMany(College, {
  through: "college_departments",
  foreignKey: "department_id",
});
HOD.belongsTo(User, { foreignKey: "user_Id" });
HOD.belongsTo(College, { foreignKey: "college_Id" });
HOD.belongsTo(Department, { foreignKey: "department_Id" });
Teacher.belongsTo(User, { foreignKey: "user_Id" });
Teacher.belongsTo(HOD, { foreignKey: "hod_Id" });
Student.belongsTo(Course, { foreignKey: "course_Id" });
Student.belongsTo(Teacher, { foreignKey: "teacher_Id" });
Course.hasMany(Student, { foreignKey: "course_Id" });
Teacher.hasMany(Student, { foreignKey: "teacher_Id" });
export { User, Role, College, Department,Teacher,Student,Course};
