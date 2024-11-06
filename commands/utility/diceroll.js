const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('diceroll')
        .setDescription('Throw a dice (1d20) and let MoominBot decide of your fate!'),

    async execute(interaction) {
        const diceNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        const randomRoll = diceNumber[Math.floor(Math.random()*diceNumber.length)];

        if(randomRoll === "1"){
            await interaction.reply("Critical fail ! You rolled a 1 !");
        } else if (randomRoll === "20"){
            await interaction.reply("Critical Success ! You rolled a 20 !");
        } else {
            await interaction.reply(`You rolled ${randomRoll}`);
        }

    }
}