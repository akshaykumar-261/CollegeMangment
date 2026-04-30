import { sequelize } from "./db.js";

const startServer = async (server, PORT) => {
  const port = PORT || process.env.PORT || 5000;

  try {
    await sequelize.authenticate();
    console.log("Database Connected Successfully");
    //await sequelize.sync({ alter: true });
    //console.log("All models synced");

    console.log("All models synced");
  } catch (error) {
    console.log("Database Connection failed:", error.message);
    process.exit(1);
  }
  try {
    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Server failed to start", error.message);
  }
};

export default startServer;
