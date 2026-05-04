import jwt, { decode } from "jsonwebtoken";
import { sendGroupJoin, sendGroupMessageStatus, sendLeaveGroup, sendPrivateMessage, sendWelcome } from "./socketEvents";
const user = new Map();
const socketHandler = (io) => {
    //check the user token
  io.use((socket, next) => {
    try {
      const token =
        socket.handshake.auth.token || socket.handshake.headers.token;
      if (!token) {
        return next(new Error("Token required"));
      }
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      socket.use = {
        id: decode.id,
      };
      next();
    } catch (error) {
      next(new Error("Invalid Token"));
    }
  });   
    // user connection
    io.on("connection", (socket) => {
        const userId = socket.user.id;
        users.set(userId, socket.id);
        console.log(`User ${userId} connected`);
        sendWelcome(socket, userId);
        //Private Message
        socket.on("private_Message", (data) => {
            if (typeof data === "string") {
                data = JSON.parse(data);
            }
            const { reciveId, message } = data;
            const targetSocketId = user.get(reciveId);
            if (targetSocketId) {
                io.to(targetSocketId).emit("receive_private_message", {
                    from: userId,
                    message,
                });
                sendPrivateMessage(socket, true, "Message sent successfully");
            } else {
                sendPrivateMessage(socket, false, "Reciver is offline");
            }
        })
        // Group Message 
        socket.on("group_message", (data) => {
            if (typeof data === "string") {
                data = JSON.parse(data);
            }
            const { groupId, message } = data;
            io.to(groupId).emit("recive_group_message", {
                groupId,
                from: userId,
                message
            });
            sendGroupMessageStatus(socket);
        });
        socket.on("join_group", (data) => {
            if (typeof data === "string") {
                data = JSON.parse(data);
            }
            const { groupId } = data;
            socket.join(groupId);
            console.log(`User ${userId} joined ${groupId}`);
            sendGroupJoin(socket, groupId);
        });
        socket.on("leave_group", (data) => {
            if (typeof data === "string") {
                data = JSON.parse(data);
            }
            const { groupId } = data;
            socket.leave(groupId);
            console.log(`User ${userId} left ${groupId}`);
            sendLeaveGroup(socket, groupId);
        });
        socket.on("disconnect", () => {
            users.delete(userId);
            console.log(`User ${userId} disconnected`);
        })
    })
};
export default socketHandler;
