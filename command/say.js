module.exports.run = async (Discord, client, message, args) =>  {

	var say = args.join(' ')

	if(!say [0] || say[0 == 'help']) return message.channel.send("```!say [content] \n cannot be empty | don't even try !say [!say]```")

		return message.channel.send(say)

		module.exports.help = {
			name: "avatar",
			description: "show the avatar of a user",
			usage: "[@user]"
		}
	
}