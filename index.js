require("dotenv").config();
const debug = require("debug")("myFriends:root");
const chalk = require("chalk");
const connectToDataBase = require("./src/database");
const app = require("./src/server");
const socialServidor = require("./src/server/server");

const port = process.env.PORT || 3000;
const connectString = process.env.MONGO_STRING;

(async () => {
  try {
    await connectToDataBase(connectString);
    await socialServidor(app, port);
    debug(chalk.bgGray.greenBright(`Connection succesful!`));
  } catch (error) {
    debug(chalk.redBright(`Error: ${error.message}`));
  }
})();
