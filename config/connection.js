import { sequelize } from "./db.js";

const startServer = async (server, PORT) => {
  const port = PORT || process.env.PORT || 5000;

  try {
    await sequelize.authenticate();
    
    console.log("Database Connected Successfully");

    await sequelize.sync();
    console.log("All models synced");
  } catch (error) {
    console.log("Database Connection failed:", error.message);
    process.exit(1);
  }

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

export default startServer;
