import User from "../dataBase/models/user.js";
import Role from "../dataBase/models/roles.js";
import { STATUS } from "../utility/statusCode.js";
import { HOD_MESSAGE } from "../utility/commonMessage.js";
import { sendResponse } from "../utility/sendResposne.js";
import {
  createHodDetail,
  deleteHodDetail,
  findHodDetail,
  findHodDetailById,
  getAllHod,
  updateHodDetail,
} from "./hodService.js";

export const hodCreate = async (req, res) => {
  try {
    const { user_Id, college_Id, department_Id } = req.body;
    if (!user_Id || !college_Id || !department_Id) {
      return sendResponse(res, STATUS.BAD_REQUEST, HOD_MESSAGE.REQUIRED_FIELDS);
    }
    // verify user exists and has role HOD
    const user = await User.findOne({
      where: { id: user_Id, is_active: 1 },
      include: Role,
    });
    if (!user) {
      return sendResponse(res, STATUS.BAD_REQUEST, HOD_MESSAGE.HOD_NOT_FOUND);
    }
    if (user.Role?.role_name !== "HOD") {
      return sendResponse(res, STATUS.BAD_REQUEST, HOD_MESSAGE.HOD_ROLE);
    }
    const hod = await createHodDetail(req.body);
    return sendResponse(res, STATUS.CREATED, HOD_MESSAGE.HOD_CREATED, { hod });
  } catch (error) {
    console.log(`Error while creating HOD:${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, HOD_MESSAGE.SERVER_ERROR);
  }
};

export const hodUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await findHodDetailById(id);
    if (!existing) {
      return sendResponse(res, STATUS.BAD_REQUEST, HOD_MESSAGE.NO_HOD_FOUND);
    }

    await updateHodDetail(id, req.body);

    const updated = await findHodDetailById(id);

    return sendResponse(res, STATUS.SUCCESS, HOD_MESSAGE.HOD_UPDATED, {
      updated,
    });
  } catch (error) {
    console.log(`Error while creating HOD:${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, HOD_MESSAGE.SERVER_ERROR);
  }
};

export const hodDelete = async (req, res) => {
  try { 
    const { id } = req.params;

    const existing = await findHodDetailById(id);
    if (!existing) {
      return sendResponse(res, STATUS.NOT_FOUND, HOD_MESSAGE.HOD_NOT_FOUND);
    }

    const deleted = await deleteHodDetail(id);

    if (!deleted) {
      return sendResponse(res, STATUS.NOT_FOUND, HOD_MESSAGE.HOD_NOT_FOUND);
    }

    return sendResponse(res, STATUS.SUCCESS, HOD_MESSAGE.HOD_DELETED);
  } catch (error) {
    console.log(`Error while creating HOD:${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, HOD_MESSAGE.SERVER_ERROR);
  }
};

export const getHodsList = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;

    const data = await getAllHod({ page, limit, search });

    return sendResponse(res, STATUS.SUCCESS, HOD_MESSAGE.HOD_FETCHED, { data });
  } catch (error) {
    console.log(`Error while creating HOD:${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, HOD_MESSAGE.SERVER_ERROR);
  }
};
