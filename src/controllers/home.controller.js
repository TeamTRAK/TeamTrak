const get = (req, res) => {
	res.renderFile('index.html');
}

module.exports = {
	get
};
