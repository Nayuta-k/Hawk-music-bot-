
module.exports.run = async (Discord, client, message, args) => {

    let user = message.mentions.users.first();
	var author; // mention to get avatar
	
		if(user){
			var author = user;

			let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription("Avatar de " + `${author.username}`)
			.setImage(user.displayAvatarURL)
			return message.channel.send(embed)

		} else {
			var author = message.author;
			console.log("marche")
			let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription("Votre avatar")
			.setImage(author.displayAvatarURL)
			return message.channel.send(embed)
		}

}