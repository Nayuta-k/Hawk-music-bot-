module.exports.run = async (Discord, client, message, args, ytdl, streamOptions) => {

        if (!message.member.voiceChannel) return message.channel.send("T'es pas connecté a un channel vocal");

        if (!message.guild.me.voiceChannel) return message.channel.send("Je suis pas connecté :neutral_face");

        if (message.guild.me.voiceChannelID !== message.guild.me.voiceChannelID) return message.channel.send("T'es pas connecté dans le même channel que moi");
       
        message.guild.me.voiceChannel.leave()
       
        message.channel.send("Leaving channel...");

        console.log("leave");

}