import express from "express";
import checkRole from "../meddlweare/roleBaseMeddleweare.js";
import authorize from "../meddlweare/authmeddleweare.js";
import * as validation from "../src/userValidation.js";
import * as userController from "../src/userController.js";

const router = express.Router();
const role = checkRole("Super Admin");

router.post(
  "/login",
  validation.validateRequest(validation.loginSchema),
  userController.login,
);
router.post(
  "/createUser",
  authorize,
  role,
  validation.validateRequest(validation.userCreateSchema),
  userController.userCreate,
);
router.put(
  "/updateUser/:id",
  authorize,
  role,
  validation.validateRequest(validation.userUpdateSchema),
  userController.userUpdate,
);
router.get("/getList", authorize, role, userController.getUsers);
router.delete(
  "/deleteUser/:id",
  authorize,
  role,
  validation.validateRequest(validation.idParamSchema),
  userController.userDelete,
);

export default router;
