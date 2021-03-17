const chalk = require('chalk');
const figlet = require('figlet');
module.exports = {
	title: () =>
		console.log(`${
			chalk.blue(
				figlet.textSync(' KBS ', {
					horizontalLayout: 'full',
					font: 'ANSI Shadow'
				})
			)}\n`)
};