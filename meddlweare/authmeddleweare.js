import jwt from "jsonwebtoken";
import User from "../dataBase/models/user.js";
import Role from "../dataBase/models/roles.js";

export const authorize = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorize user" });
    }
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      where: {
        id: decode.id,
        is_active: 1,
      },
      include: [
        {
          model: Role,
          attributes: ["name"],
        },
      ],
    });
    if (!user) {
      return res.status(401).json({ message: "User not found or inactive" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Authorization error", error.message);
    res.status(401).json({ message: "Invalid Token" });
  }
};
