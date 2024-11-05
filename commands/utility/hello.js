const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Hello World!'),

    async execute(interaction) {
        if(interaction.user.id === '308551664602841089'){
            await interaction.reply ('Hello mama yicc')
        } else {
            await interaction.reply(`Hello <@${interaction.user.id}> !`)
        }

    }
}