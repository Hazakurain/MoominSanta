const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('naughtyornice')
        .setDescription('Determine if you are a cutie patootie, or a naughty patootie and win a role!')
        .addUserOption(option => option.setName('user').setDescription('The user you want to get your infos on').setRequired(false)),

    async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        const member = await interaction.guild.members.fetch(user.id);
        const icon = user.displayAvatarURL();
        const tag = user.tag;
        const colour = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Magenta"];
        const randColour = colour[Math.floor(Math.random() * colour.length)];

        const embed = new EmbedBuilder()
            .setColor(randColour)
            .setAuthor({name: tag, iconURL : icon})
            .setThumbnail(icon)
            .addFields({name: "Member", value: `${user}`, inline:false})
            .addFields({name: "Roles", value: `${member.roles.cache.map(r => r).join(' ')}`, inline:false})

        await interaction.reply ({embeds: [embed]});
    }
}