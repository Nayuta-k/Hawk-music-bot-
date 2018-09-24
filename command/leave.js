module.exports.run = async (Discord, client, message, args, ytdl, streamOptions) => {

        if (!message.member.voiceChannel) return message.channel.send("You're not connected");

        if (!message.guild.me.voiceChannel) return message.channel.send("I'm not connected");

        if (message.guild.me.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send("Not in the same channel");
       
        message.guild.me.voiceChannel.leave()
       
        const leave = await message.channel.send("Leaving channel...");
        
        leave.edit('Leaving successful !');
        

        console.log("leave");

}
