module.exports.run = async (Discord, client, message, args, ytdl, streamOptions) => {

    var [link] = args;
  
    if (!message.member.voiceChannel) return message.channel.send("You're not connected to a voice channel");

    if (message.guild.me.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send("You're not in my voice channel");

    message.member.voiceChannel.join()
  .then(connection => {
    console.log('play');
    const stream = ytdl(link, { filter : 'audioonly' });
    const dispatcher = connection.playStream(stream, streamOptions);
    
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username}`)
    .addField('Actually playing', link)
    return message.channel.send(embed)
  })
  .catch(console.error);
  
  }

    