
module.exports = async (bot) => {
	bot.log.info('Checking for server jar updates');

	if (bot.config.server_jars_api.toLowerCase() === 'papermc')
		await require('../paper/check')(bot);
	else
		await require('../serverjars/check')(bot);

	bot.log.info('Checking for plugin updates');
};