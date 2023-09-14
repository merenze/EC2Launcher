const path = require("path");
const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token, appId, guildId } = require(path.join(__dirname, "src/utils/config"));
const startCommand = require(path.join(__dirname, "src/commands/start"));
const deployCommands = require(path.join(__dirname, "src/utils/deploy-commands"));

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = {
  start: startCommand,
};

// Log in to Discord with your client's token
client.login(token);

// Deploy commands
deployCommands();

client.on(Events.InteractionCreate, async (interaction) => {
  console.log(interaction);
  if (commands[interaction.commandName]) {
    await commands[interaction.commandName].execute(interaction);
  }
});