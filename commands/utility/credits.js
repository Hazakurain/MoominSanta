const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('credits')
        .setDescription('I really wonder who created that bot !'),

    async execute(interaction) {
        await interaction.reply("Made with love by Tristan :tristan:")
    }
}