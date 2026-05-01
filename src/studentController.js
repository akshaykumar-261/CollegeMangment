import { STATUS } from "../utility/statusCode.js";
import { STUDENT_MESSAGE } from "../utility/commonMessage.js";
import { sendResponse } from "../utility/sendResposne.js";
import {
  createStudent,
  findStudentById,
  updateStudent,
  deleteStudent,
  getAllStudents,
} from "./studentService.js";

export const studentCreate = async (req, res) => {
  try {
    const data = await createStudent(req.body);
    return sendResponse(res, STATUS.CREATED, STUDENT_MESSAGE.STUDENT_CREATED, {
      data,
    });
  } catch (error) {
    console.log(`Error creating College: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, STUDENT_MESSAGE.SERVER_ERROR);
  }
};

export const studentUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await findStudentById(id);
    if (!student) {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        STUDENT_MESSAGE.STUDENT_NOT_FOUND,
      );
    }
    await updateStudent(id, req.body);
    return sendResponse(res,STATUS.SUCCESS, STUDENT_MESSAGE.STUDENT_UPDATED);
  } catch (error) {
    console.log(`Error creating College: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, STUDENT_MESSAGE.SERVER_ERROR);
  }
};

export const studentDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await findStudentById(id);
    if (!student) {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        STUDENT_MESSAGE.NO_STUDENT_FOUND,
      );
    }
    await deleteStudent(id);
    return sendResponse(res, STATUS.SUCCESS, STUDENT_MESSAGE.STUDENT_DELETED);
  } catch (error) {
    console.log(`Error creating College: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, STUDENT_MESSAGE.SERVER_ERROR);
  }
};

export const getStudents = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "" } = req.query;
      
    const data = await getAllStudents({ page, limit, search });
    return sendResponse(res, STATUS.SUCCESS, STUDENT_MESSAGE.STUDENT_FETCHED, {data,});
  } catch (error) {
    console.log(`Error creating College: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, STUDENT_MESSAGE.SERVER_ERROR);
  }
};
