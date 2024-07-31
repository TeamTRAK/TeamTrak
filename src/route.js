const fs = require('fs').promises;
const path = require('path');

async function link (app) {
	// app.use(async (req, res, next) => {
	// 	await new Promise(r => r());
	// 	next();
	// });

	const routerModules = (await fs.readdir(path.join(__dirname, 'routes'))).filter(file => file.endsWith('.js'));
	routerModules.forEach(module => {
		const { route, router } = require(path.join(__dirname, 'routes', module));
		app.use(route, router);
	});
}

module.exports = link;
