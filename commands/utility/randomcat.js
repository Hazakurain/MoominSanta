const { AttachmentBuilder, SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomcat')
        .setDescription('Use this command and receive a random cat picture !'),

    async execute(interaction) {
        const diceNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        const randomRoll = diceNumber[Math.floor(Math.random()*diceNumber.length)];
        const colour = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
        const randColour = colour[Math.floor(Math.random() * colour.length)];
        const catEmbed = {
            "1": { title: "You've been visited by Nap Princess Shuri", description: "Peace and good sleep upon you." },
            "2": { title: "You've been visited by Thirsty Shuri", description: "It's finger lickin' good." },
            "3": { title: "You've been visited by Camo Shuri", description: "Preys better start running." },
            "4": { title: "You've been visited by Judgemental Shuri", description: "She has seen your browser history." },
            "5": { title: "You've been visited by Flower Shuri", description: "Flowers always make everything better." },
            "6": { title: "You've been visited by Pigo", description: "Can sniff treats seven meters away." },
            "7": { title: "You've been visited by Ostrich Zico", description: "Far from the eyes, far from the heart" },
            "8": { title: "You've been visited by Hypnotized Zico", description: "Trust in me." },
            "9": { title: "You've been visited by Giant Zico", description: "About to walk on you." },
            "10": { title: "You've been visited by Unhappy Zico", description: "Just woke up from a nap and ready to kick ass." },
            "11": { title: "You've been visited by Lovely Mischa", description: "That means she wants pets. For real, pet her." },
            "12": { title: "You've been visited by Nappy Mischa", description: "Still keeping you in check though." },
            "13": { title: "You've been visited by Derpy Mischa", description: "What the fuck is going on." },
            "14": { title: "You've been visited by Exhausted Mischa", description: "Not a single ounce of fuel in that cutie. Time for a nap." },
            "15": { title: "You've been visited by Baby Mischa", description: "Moh. Awww." },
            "16": { title: "You've been visited by the PS5 Guardian Kimo", description: "Totally not because it is a good heater in winter." },
            "17": { title: "You've been visited by Deep Sleep Goro", description: "Call back later." },
            "18": { title: "You've been visited by Sniffing Rudius", description: "Oh what is this ? A phone ? Never saw that before" },
            "19": { title: "You've been visited by Cutie Kimo", description: "I can't handle so much cuteness." },
            "20": { title: "You've been visited by ...the Donkey Dog ?", description: "Eliott is about to steal your soul" },
        };

        async function sendCatPicture(interaction, number) {

            const picturePath = `./assets/img/cats/${number.padStart(2, '0')}.jpg`;
            const picture = new AttachmentBuilder(picturePath);

            const title = catEmbed[number].title;
            const description = catEmbed[number].description;

            const pictureEmbed = new EmbedBuilder()
                .setColor(randColour)
                .setImage(`attachment://${number.padStart(2, '0')}.jpg`)
                .setTitle(title)
                .setDescription(description);

            await interaction.reply({ embeds: [pictureEmbed], files: [picture] });
        }

        sendCatPicture(interaction, randomRoll);
    }
}