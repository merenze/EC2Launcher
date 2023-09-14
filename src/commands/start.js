const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('Starts the EC2 instance.'),
    
    execute: async (interaction) => {
        await interaction.reply(`Hello, ${interaction.user.username}!`);
    },
};