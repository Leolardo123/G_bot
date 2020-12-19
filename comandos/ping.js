module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, detalhes) {
		message.channel.send('Pong.');
	},
};