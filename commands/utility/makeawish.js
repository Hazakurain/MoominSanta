const { AttachmentBuilder, SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('makeawish')
        .setDescription('Make a wish!'),

    async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        const colour = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
        const randColour = colour[Math.floor(Math.random() * colour.length)];
        const picture = new AttachmentBuilder("./assets/img/wish.gif")
        const makeAWishEmbed = new EmbedBuilder()
            .setColor(randColour)
            .setThumbnail('attachment://wish.gif')
            .setTitle(`You made a wish.`)
            .setDescription(`Let's hope it will happen !`)

        await interaction.reply({embeds: [makeAWishEmbed], files: [picture]});
    }
}