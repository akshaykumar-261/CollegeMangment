import "dotenv/config";
import express from "express";
import http from "http";
import startServer from "./connection.js";
import userRoutes from "../routes/userRoutes.js"
import "../dataBase/models/association.js"
const app = express();
app.use(express.json());
const server = http.createServer(app);
app.use("/api/users", userRoutes);
const PORT = process.env.PORT;

startServer(server, PORT);
