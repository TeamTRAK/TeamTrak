const express = require('express');
const path = require('path');

module.exports = (app) => {
	app.use(express.static(path.join(__dirname, '../../public')));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.use((req, res, next) => {
		res.renderFile = (file, ctx) => {
			return res.sendFile(path.join(__dirname, '../static', file), ctx);
		};
		res.error = err => {
			res.status(400).send(err?.message || err);
		};
		next();
	});
};
