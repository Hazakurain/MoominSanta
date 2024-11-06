const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('naughtyornice')
        .setDescription('Determine if you are a cutie patootie, or a naughty patootie and win a role!'),

    async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        const member = await interaction.guild.members.fetch(user.id);
        const roleArray = member.roles.cache.map(r => r).join(' ');
        const arrayRoll = ["1", "2"];
        const randomRole = arrayRoll[Math.floor(Math.random()*arrayRoll.length)];

        if(randomRole === "1"){
            if(interaction.member.roles.cache.some(role => role.name === "NaughtyPatootie")){
                await interaction.member.roles.remove("1303372723023777822");
                await interaction.member.roles.add("1303372685547536475");
                const picture = new AttachmentBuilder("./assets/img/happymin.png")
                const cutiePatootieEmbed = new EmbedBuilder()
                    .setColor("DarkGreen")
                    .setThumbnail('attachment://happymin.png')
                    .setTitle(`🎄 Alright ... alright ... 🎄`)
                    .setDescription(`I'm putting you on the cutie list 😇 !`)
                await interaction.reply({embeds: [cutiePatootieEmbed], files: [picture]});
            } else if(interaction.member.roles.cache.some(role => role.name === "CutiePatootie")) {
                const picture = new AttachmentBuilder("./assets/img/happymin.png")
                const cutiePatootieEmbed = new EmbedBuilder()
                    .setColor("DarkGreen")
                    .setThumbnail('attachment://happymin.png')
                    .setTitle(`🎄 Hey !  🎄`)
                    .setDescription(`You are already on the cutie list ! 😇`)
                await interaction.reply({embeds: [cutiePatootieEmbed], files: [picture]});
            } else {
                await interaction.member.roles.add("1303372685547536475");
                const picture = new AttachmentBuilder("./assets/img/happymin.png")
                const cutiePatootieEmbed = new EmbedBuilder()
                    .setColor("DarkGreen")
                    .setThumbnail('attachment://happymin.png')
                    .setTitle(`🎄 Moomin santa went through the list... 🎄`)
                    .setDescription(`His eyes spots you are on the cutie patootie list! 😇 !`)

                await interaction.reply({embeds: [cutiePatootieEmbed], files: [picture]});

            }
        } else {
            if(interaction.member.roles.cache.some(role => role.name === "CutiePatootie")){
                await interaction.member.roles.remove("1303372685547536475");
                await interaction.member.roles.add("1303372723023777822");
                const picture = new AttachmentBuilder("./assets/img/ANGRY.png")
                const naughtyPatootieEmbed = new EmbedBuilder()
                    .setColor("DarkRed")
                    .setThumbnail('attachment://ANGRY.png')
                    .setTitle(`Ewww ! Stinky !`)
                    .setDescription(`👺 SINCE YOU ARE COMPLAINING I'M PUTTING YOU ON THE NAUGHTY LIST 👺`)
                await interaction.reply({embeds: [naughtyPatootieEmbed], files: [picture]});
            } else if(interaction.member.roles.cache.some(role => role.name === "NaughtyPatootie")) {
                const picture = new AttachmentBuilder("./assets/img/ANGRY.png")
                const naughtyPatootieEmbed = new EmbedBuilder()
                    .setColor("DarkRed")
                    .setThumbnail('attachment://ANGRY.png')
                    .setTitle(`Why ?`)
                    .setDescription(`You are already on the naughty list !` )
                await interaction.reply({embeds: [naughtyPatootieEmbed], files: [picture]});
            } else {
                await interaction.member.roles.add("1303372723023777822");
                const picture = new AttachmentBuilder("./assets/img/stinky.png")
                const naughtyPatootieEmbed = new EmbedBuilder()
                    .setColor("DarkRed")
                    .setThumbnail('attachment://stinky.png')
                    .setTitle(`🎄 Moomin santa went through the list... 🎄`)
                    .setDescription(`His eyes spots you are on the naughty patootie list! 😈`)

                await interaction.reply({embeds: [naughtyPatootieEmbed], files: [picture]});
                }
            }
    }
}