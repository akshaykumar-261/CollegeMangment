import { STATUS } from "../utility/statusCode.js";
import { COLLEGE_MESSAGE } from "../utility/commonMessage.js";
import { sendResponse } from "../utility/sendResposne.js";
import {
  createCollege,
  deleteCollege,
  findCollege,
  findCollegeById,
  getAllCollege,
  updateCollege,
} from "./collegeService.js";

export const collegeCreate = async (req, res) => {
  try {
    const {
      college_Name,
      college_Email,
      college_Phone_No,
      location,
      establishedYear,
      user_Id,
    } = req.body;
    if (!college_Name || !college_Email) {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        COLLEGE_MESSAGE.REQUIRED_FIELDS,
      );
    }
    const existing = await findCollege(college_Email);
    if (existing) {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        COLLEGE_MESSAGE.COLLEGE_EXISITE,
      );
    }
    const newCollege = await createCollege({
      college_Name,
      college_Email,
      college_Phone_No,
      location,
      establishedYear,
      user_Id,
    });
    if (req.body.department_ids?.length) {
      await newCollege.addDepartments(req.body.department_ids);
    }
    return sendResponse(res, STATUS.CREATED, COLLEGE_MESSAGE.COLLEGE_CREATED, {
      newCollege,
    });
  } catch (error) {
    console.log(`Error creating College: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, COLLEGE_MESSAGE.SERVER_ERROR);
  }
};

export const collegeUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const existingCollege = await findCollegeById(id);
    if (!existingCollege) {
      return sendResponse(
        res,
        STATUS.NOT_FOUND,
        COLLEGE_MESSAGE.NO_COLLEGE_FOUND,
      );
    }
    await updateCollege(id, req.body);
    if (req.body.department_ids?.length) {
      await existingCollege.setDepartments(req.body.department_ids);
    }
    const updated = await findCollegeById(id);
    return sendResponse(res, STATUS.SUCCESS, COLLEGE_MESSAGE.COLLEGE_UPDATED, {
      updated,
    });
  } catch (error) {
    console.log(`Error while updating College:${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, COLLEGE_MESSAGE.SERVER_ERROR);
  }
};

export const collegeDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const existingCollege = await findCollegeById(id);
    if (!existingCollege) {
      return sendResponse(
        res,
        STATUS.NOT_FOUND,
        COLLEGE_MESSAGE.COLLEGE_NOT_FOUND,
      );
    }

    const deleted = await deleteCollege(id);

    if (!deleted) {
      return sendResponse(res, STATUS.BAD_REQUEST, "College delete failed");
    }

    return sendResponse(res, STATUS.SUCCESS, COLLEGE_MESSAGE.COLLEGE_DELETED);
  } catch (error) {
    console.log("Error deleting college:", error);
    return sendResponse(res, STATUS.SERVER_ERROR, COLLEGE_MESSAGE.SERVER_ERROR);
  }
};

export const getAllColleges = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;

    const data = await getAllCollege({ page, limit, search });

    return sendResponse(res, STATUS.SUCCESS, COLLEGE_MESSAGE.COLLEGE_FETCHED, {
      data,
    });
  } catch (error) {
    console.log("Error fetching colleges:", error);
    return sendResponse(res, STATUS.SERVER_ERROR, "Server Error");
  }
};
