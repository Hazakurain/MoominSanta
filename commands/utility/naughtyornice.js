const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('naughtyornice')
        .setDescription('Determine if you are a cutie patootie, or a naughty patootie and win a role!')
        .addUserOption(option => option.setName('user').setDescription('The user you want to get your infos on').setRequired(false)),

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
                await interaction.reply ("Alright ... alright... I'm putting you on the cutie list");
            } else if(interaction.member.roles.cache.some(role => role.name === "CutiePatootie")) {
                await interaction.reply("You are already on the cutie list ! ");
            } else {
                await interaction.member.roles.add("1303372685547536475");
                await interaction.reply ("You are a sweet beautiful child");
            }
        } else {
            if(interaction.member.roles.cache.some(role => role.name === "CutiePatootie")){
                await interaction.member.roles.remove("1303372685547536475");
                await interaction.member.roles.add("1303372723023777822");
                await interaction.reply ("SINCE YOU ARE COMPLAINING I'M PUTTING YOU ON THE NAUGHTY LIST");
            } else if(interaction.member.roles.cache.some(role => role.name === "NaughtyPatootie")) {
                await interaction.reply("You are already on the naughty list ! ");
            } else {
                await interaction.member.roles.add("1303372723023777822");
                await interaction.reply ("You've been a terrible child, havent you ? ");
                }
            }
    }
}