import "dotenv/config";
import express from "express";
import http from "http";
import startServer from "./connection.js";
import userRoutes from "../routes/userRoutes.js";
import collegeRoutes from "../routes/collegeRoutes.js";
import hodRoutes from "../routes/hodRoute.js";
import "../dataBase/models/association.js";
const app = express();
app.use(express.json());
const server = http.createServer(app);
app.use("/api/users", userRoutes);
app.use("/api/college", collegeRoutes);
app.use("/api/hod", hodRoutes);
const PORT = process.env.PORT;

startServer(server, PORT);
