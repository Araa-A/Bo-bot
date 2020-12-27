const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;

client.on('ready', () => {
	console.log("Bobo's minion reporting for duty");
	console.log(client.user.username);
});

client.login(process.env.BOT_TOKEN);
