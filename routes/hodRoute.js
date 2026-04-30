import express from "express";
import checkRole from "../meddlweare/roleBaseMeddleweare.js";
import authorize from "../meddlweare/authmeddleweare.js";
import * as validation from "../src/hodValidation.js";
import * as hodController from "../src/hodController.js";

const route = express.Router();
const role = checkRole("Super Admin");
route.post(
  "/createHod",
  authorize,
  role,
  validation.validateRequest(validation.createHodSchema),
  hodController.hodCreate,
);
route.put(
  "/updateHod",
  authorize,
  role,
  validation.validateRequest(validation.updateHodSchema),
  hodController.hodUpdate,
);
route.get("/getHodList", authorize, role, hodController.getHodsList);
route.delete("/hodDelete", authorize, role, hodController.hodDelete);
export default route;
