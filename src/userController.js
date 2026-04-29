import User from "../dataBase/models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { STATUS } from "../utility/statusCode.js";
import { USER_MESSAGE } from "../utility/commonMessage.js";
import { sendResponse } from "../utility/sendResposne.js";
import {
  createUser,
  deleteUser,
  findUser,
  findUserById,
  getAllUser,
  updateUser,
} from "./userService.js";

export const userCreate = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_no,
      address,
      password,
      role_id,
    } = req.body;
    if (!email || !password) {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        USER_MESSAGE.REQUIRED_FIELDS,
      );
    }
    const existing = await findUser(email);
    if (existing) {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        USER_MESSAGE.EMAIL_ALREADY_EXISTS,
      );
    }
    const hasPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({
      first_name,
      last_name,
      email,
      phone_no,
      address,
      password: hasPassword,
      role_id,
    });
    return sendResponse(res, STATUS.CREATED, USER_MESSAGE.USER_CREATED, {
      newUser,
    });
  } catch (error) {
    console.log(`Error creating Employee: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, USER_MESSAGE.SERVER_ERROR);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInDb = await findUser(email);
    if (!userInDb) {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        USER_MESSAGE.INVALID_CREDENTIALS,
      );
    }
    const isMatch = await bcrypt.compare(password, userInDb.password);
    if (!isMatch) {
      return sendResponse(
        res,
        STATUS.BAD_REQUEST,
        USER_MESSAGE.INVALID_CREDENTIALS,
      );
    }

    const token = jwt.sign(
      {
        id: userInDb.id,
        role_id: userInDb.role_id,
        email: userInDb.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    return sendResponse(res, STATUS.SUCCESS, USER_MESSAGE.LOGIN_SUCCESS, {
      token,
    });
  } catch (error) {
    console.log(`Error creating Employee: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, USER_MESSAGE.SERVER_ERROR);
  }
};

export const userUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
    if (!user) {
      return sendResponse(res, STATUS.BAD_REQUEST, USER_MESSAGE.USER_NOT_FOUND);
    }
    await updateUser(id, req.body);
    return sendResponse(res, STATUS.SUCCESS, USER_MESSAGE.USER_UPDATED,{user});
  } catch (error) {
    console.log(`Error creating Employee: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, USER_MESSAGE.SERVER_ERROR);
  }
};

export const userDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
     console.log("==========>", user);
    if (!user) {
      return sendResponse(res, STATUS.BAD_REQUEST, USER_MESSAGE.USER_NOT_FOUND);
    }
   
    await deleteUser(id);
    return sendResponse(res, STATUS.SUCCESS, USER_MESSAGE.USER_DELETED);
  } catch (error) {
    console.log(`Error creating Employee: ${error}`);
    return sendResponse(res, STATUS.SERVER_ERROR, USER_MESSAGE.SERVER_ERROR);
  }
};
export const getUsers = async (req, res) => {
  try {
    let { page = 1, limit = 10, search = "" } = req.query;
    const data = await getAllUser({ page, limit, search });
    return sendResponse(res, STATUS.SUCCESS, "Users fetched", data);
  } catch (error) {
    console.log(error);
    return sendResponse(res, STATUS.SERVER_ERROR, USER_MESSAGE.SERVER_ERROR);
  }
};
