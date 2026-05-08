import { sequelize } from "./db.js";
import {globSync} from "glob";
const startServer = async (server, PORT) => {
  const port = PORT || process.env.PORT || 5000;
  const modeFiles = globSync("./dataBase/models/*.js");
  console.log("Connections============>", modeFiles);
  const str = 'Hello World';
  //usimg slice to get the first 2 characters of the string
  console.log("====================>", str.slice(0, 2));
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
