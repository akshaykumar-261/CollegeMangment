import express from "express";
import checkRole from "../meddlweare/roleBaseMeddleweare.js";
import authorize from "../meddlweare/authmeddleweare.js";
import * as validation from "../src/studentValidation.js";
import * as studentController from "../src/studentController.js";

const route = express.Router();
const role = checkRole("Super Admin","Admin","Principal","HOD","Teacher");
route.post(
  "/createStudent",
  authorize,
  role,
  validation.validateRequest(validation.studentSchema),
  studentController.studentCreate,
);
route.put("/updateStudent/:id", authorize, role, studentController.studentUpdate);
route.delete(
  "/deleteStudent/:id",
  authorize,
  role,
  studentController.studentDelete,
);
route.get("/getStudentList", authorize, role, studentController.getStudents);
export default route;
