const router = require('express').Router();
const homeController = require('../controllers/home.controller');

router.get('/', homeController.get);

module.exports = {
	route: '/',
	router
}
