import express from "express";
import checkRole from "../meddlweare/roleBaseMeddleweare.js";
import authorize from "../meddlweare/authmeddleweare.js";
import * as validation from "../src/teacherValidation.js";
import * as teacherController from "../src/teacherController.js";

const route = express.Router();
const role = checkRole("Super Admin","Admin","Principal","HOD");
route.post(
  "/createTeacher",
  authorize,
  role,
  validation.validateRequest(validation.teacherValidation),
  teacherController.createTeacher,
);
route.put(
  "/updateTeacher/:id",
  authorize,
  role,
  teacherController.updateTeacher,
);
route.delete(
  "/deleteTeacher/:id",
  authorize,
  role,
  teacherController.deleteTeacher,
);
route.get("/getTeacherList", authorize, role, teacherController.getTeachers);

export default route;
