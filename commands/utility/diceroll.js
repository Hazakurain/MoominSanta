const { AttachmentBuilder, SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('diceroll')
        .setDescription('Throw a dice (1d20) and let MoominBot decide of your fate!'),

    async execute(interaction) {
        const diceNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        const randomRoll = diceNumber[Math.floor(Math.random()*diceNumber.length)];

        const colour = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
        const randColour = colour[Math.floor(Math.random() * colour.length)];
        const picture = new AttachmentBuilder("./assets/img/D20WHITE.png")
        if(randomRoll === "1"){
            const diceRollEmbed = new EmbedBuilder()
                .setColor(randColour)
                .setThumbnail('attachment://D20WHITE.png')
                .setTitle(`You rolled the dice and ...`)
                .setDescription(`You rolled 1 ! Oh no ... :(`)
            await interaction.reply({embeds: [diceRollEmbed], files: [picture]});
        } else if (randomRoll === "20"){
            const diceRollEmbed = new EmbedBuilder()
                .setColor(randColour)
                .setThumbnail('attachment://D20WHITE.png')
                .setTitle(`You rolled the dice and ...`)
                .setDescription(`You rolled 20 ! Critical success !`)
            await interaction.reply({embeds: [diceRollEmbed], files: [picture]});
        } else {
            const diceRollEmbed = new EmbedBuilder()
                .setColor(randColour)
                .setThumbnail('attachment://D20WHITE.png')
                .setTitle(`You rolled the dice and ...`)
                .setDescription(`You rolled ${randomRoll} !`)
            await interaction.reply({embeds: [diceRollEmbed], files: [picture]});
        }

    }
}