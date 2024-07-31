const router = require('express').Router();
const contactController = require('../controllers/contact.controller');

router.post('/', contactController.post);

module.exports = {
	route: '/contact',
	router
}
