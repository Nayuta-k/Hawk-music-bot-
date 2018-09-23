
module.exports.run = async (Discord, client, message, args) => {

    let user = message.mentions.users.first();
	var author; // mention to get avatar
	
		if(user){
			var author = user;

			let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription(`${author.username}` + "'s avatar")
			.setImage(user.displayAvatarURL)
			return message.channel.send(embed)

		} else {
			var author = message.author;
			let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setDescription("Your avatar")
			.setImage(author.displayAvatarURL)
			return message.channel.send(embed)
		} 

}
