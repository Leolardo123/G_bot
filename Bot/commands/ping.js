module.exports = {
	name: 'ping',
	description: 'Ping!',
	args:false,//comando ultiliza argumentos (sim ou não)
	execute(message, Args) {
		message.channel.send('Pong.');
	},
};