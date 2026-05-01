import User from "../dataBase/models/user.js";
import Role from "../dataBase/models/roles.js";
import { STATUS } from "../utility/statusCode.js";
import { TEACHER_MESSAGE } from "../utility/commonMessage.js";
import { sendResponse } from "../utility/sendResposne.js";
import {
  createTeacherDetail,
  getAllTeacher,
  findTeacherDetailById,
  updateTeacherDetail,
  deletetTeacherDetail,
} from "./teacherService.js";

export const createTeacher = async (req, res) => {
  try {
    const { subject, user_Id, hod_Id } = req.body;
    const user = await User.findOne({
      where: { id: user_Id, is_active: 1 },
      include: Role,
    });
    if (!user) {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        TEACHER_MESSAGE.TEACHER_NOT_FOUND,
      );
    }
    if (user.Role?.role_name !== "Teacher") {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        TEACHER_MESSAGE.TEACHER_ROLE,
      );
    }
    const teacher = await createTeacherDetail(req.body);
    return sendResponse(res, STATUS.CREATED, TEACHER_MESSAGE.TEACHER_CREATED, {
      teacher,
    });
  } catch (error) {
    console.log(`Error creating College: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, TEACHER_MESSAGE.SERVER_ERROR);
  }
};

export const getTeachers = async (req, res) => {
  try {
    const { page, limit, search } = req.query;

    const teachers = await getAllTeacher({ page, limit, search });
    return sendResponse(res, STATUS.SUCCESS, TEACHER_MESSAGE.TEACHER_FETCHED, {
      teachers,
    });
  } catch (error) {
    console.log(`Error creating College: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, TEACHER_MESSAGE.SERVER_ERROR);
  }
};

export const updateTeacher = async (req, res) => {
  try {
    const { subject, user_Id, hod_Id } = req.body;
    const user = await User.findOne({
      where: { id: user_Id, is_active: 1 },
      include: Role,
    });
    if (!user) {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        TEACHER_MESSAGE.TEACHER_NOT_FOUND,
      );
    }
    if (user.Role?.role_name != "Teacher") {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        TEACHER_MESSAGE.TEACHER_ROLE,
      );
    }
    await updateTeacherDetail(req.params.id, req.body);
    return sendResponse(res, STATUS.SUCCESS, TEACHER_MESSAGE.TEACHER_UPDATED);
  } catch (error) {
    console.log(`Error creating College: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, TEACHER_MESSAGE.SERVER_ERROR);
  }
};

export const deleteTeacher = async (req, res) => {
  try {
    await deletetTeacherDetail(req.params.id);
    return sendResponse(res, STATUS.SUCCESS, TEACHER_MESSAGE.TEACHER_DELETED);
  } catch (error) {
    console.log(`Error creating College: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, TEACHER_MESSAGE.SERVER_ERROR);
  }
};
