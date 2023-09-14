const path = require("path");
const { SlashCommandBuilder } = require("discord.js");
const { instances } = require(path.join(__dirname, "../utils/config"));
const { state } = require(path.join(__dirname, "../utils/instance.js"));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("start")
    .setDescription("Starts the EC2 instance.")
    .setDMPermission(false)
    .addStringOption((option) =>
      option
        .setName("instance")
        .setDescription("Name defined for the instance")
        .setRequired(true)
    ),

  execute: async (interaction) => {
    const key = interaction.options.getString("instance");
    // No key provided
    if (!key) {
      return interaction.reply("`instance` option required.");
    }
    const instance = instances[key];
    // Instance not defined in config
    if (!instance) {
      return interaction.reply(`No EC2 instance configured for key '${key}'`, {
        ephemeral: true,
      });
    }
    // Instance defined in config
    let reply;
    try {
        return interaction.reply(await state(key));
    } catch (err) {
      console.error(err);
      return interaction.reply(err.message, { ephemeral: true });
    }
  },
};
