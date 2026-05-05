import express from "express";
import checkRole from "../meddlweare/roleBaseMeddleweare.js";
import authorize from "../meddlweare/authmeddleweare.js";
import * as validation from "../src/collegeValidation.js";
import * as collegeController from "../src/collegeController.js";
const route = express.Router();
const role = checkRole("Super Admin","Admin");
route.post(
  "/createCollege",
  authorize,
  role,
  validation.validateRequest(validation.collegeCreateSchema),
  collegeController.collegeCreate,
);
route.put(
  "/updateCollege/:id",
  authorize,
  role,
  validation.validateRequest(validation.collegeUpdateSchema),
  collegeController.collegeUpdate,
);
route.delete(
  "/deleteCollege/:id",
  authorize,
  role,
  validation.validateRequest(validation.idParamSchema),
  collegeController.collegeDelete,
);
route.get("/getCollegeList", authorize, role, collegeController.getAllColleges);
export default route;
