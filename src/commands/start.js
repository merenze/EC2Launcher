const path = require("path");
const { SlashCommandBuilder } = require("discord.js");
const { instances } = require(path.join(__dirname, "../utils/config"));

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
    if (!key) {
      return interaction.reply("`instance` option required.");
    }
    const instance = instances[key];
    if (!instance) {
      return interaction.reply(`No EC2 instance configured for key '${key}'`, {
        ephemeral: true,
      });
    }
    return interaction.reply(`Found EC2 instance for key '${key}'`);
  },
};
