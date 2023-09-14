const path = require("path");
const fs = require("fs");
const { REST, Routes } = require("discord.js");
const { token, appId } = require(path.join(__dirname, "config.js"));

const commandDir = path.join(__dirname, "../commands");

// Search the commands directory and deploy each command
module.exports = async () => {
  const commands = [];
  fs.readdirSync(commandDir).forEach((file) => {
    const { data } = require(path.join(commandDir, file));
    commands.push(data);
  });

  const rest = new REST().setToken(token);

  rest
    .put(Routes.applicationCommands(appId), { body: commands })
    .catch((error) => console.error(error));
};
