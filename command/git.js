const Discord = require('discord.js');

module.exports.run = async (Discord, client, message, args) => {

  let git = new Discord.RichEmbed()
  
  .setDescription('My github link :D')
  .addField('just clic over there', '[Hawk github](https://github.com/Nayuta-k/Hawk-music-bot-)')//don't forget to replace this link 
  .setThumbnail(client.user.displayAvatarURL)
  return message.channel.send(git);

//[Hawk github](link) hide the link so it look better than a raw github link

}
