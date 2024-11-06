const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('snowball')
        .setDescription('Throw a snowball!')
        .addUserOption(option => option.setName('target').setDescription('The user you want to throw a snowball to').setRequired(true)),


    async execute(interaction) {
        const user = interaction.user;
        const target = interaction.options.getUser('target')
        await interaction.reply(`${user} is throwing a snowball to ${target}`);
    }
}