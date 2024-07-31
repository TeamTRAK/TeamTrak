const express = require('express');
const app = express();
const initMiddleware = require('./src/middleware/initMiddleware');
const link = require('./src/route');

initMiddleware(app);
link(app)

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
	console.log(`server is running on http://localhost:${server.address().port}`);
});