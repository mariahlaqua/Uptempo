exports.getIndex = (req, res) => {
	if (req.user) {
		res.redirect('/dashboard');
	}
	res.render('index');
};

exports.getDashboard = (req, res) => {
	res.render('dashboard');
};
