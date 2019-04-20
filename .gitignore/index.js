const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("*")

bot.on("ready", fonction() {
	bot.user.setGame("Command: :help");
	console.log("Connected");
});

bot.login("NTY5MTc3Nzc2NTIzODM3NDcw.XLs9wQ.oFdAJXe9JUcj84Lq2jgJfgBEtYk");

bot.on("message", message => {
	if(message.content === prefix + "help"){
		message.channel.sendMessage("Liste des commandes : *tt/ *fabriquant");
	}

	if(message.content === prefix + "tt"){
		message.channel.sendMessage("Bot créer le _20/04/2019_ à _18h00");
		console.log("Commande éffectuée");
	}

	if(message.content === prefix + "fabriquant"){
		message.channel.sendMessage("Le bot à été créé par Desnoc");
		console.log("Commande éffectuée");
	}
});
