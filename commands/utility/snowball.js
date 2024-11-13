const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('snowball')
        .setDescription('Throw a snowball!')
        .addUserOption(option => option.setName('target').setDescription('The user you want to throw a snowball to').setRequired(true)),


    async execute(interaction) {
        const user = interaction.user;
        const target = interaction.options.getUser('target');
        const colour = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
        const randColour = colour[Math.floor(Math.random() * colour.length)];
        const picture = new AttachmentBuilder("./assets/img/tumblemin.gif");
        const snowballEmbed = new EmbedBuilder()
            .setColor(randColour)
            .setThumbnail('attachment://tumblemin.gif')
            .setTitle(`Ready ... aim ... fire !`)
            .setDescription(`${user} is throwing a snowball to ${target}`)

        await interaction.reply({embeds: [snowballEmbed], files: [picture]});
    }
}