var validator = require('validator');
const vnStr = require('vn-str');

exports.save = (req, res, next) => {
	if (!validator.default.isMobilePhone(req.body.phone_number, 'vi-VN')) {
		res.json({
			success: false,
			message: 'Your phone number is not valid!'
		});
	} else if (
		!validator.isAlpha(vnStr.rmVnTones(req.body.full_name).replaceAll(' ', ''))
	) {
		res.json({
			success: false,
			message: 'Your full name is not valid!'
		});
	} else if (
		!validator.default.isAlpha(req.body.sex) &&
		!validator.default.contains(req.body.sex)
	) {
		res.json({
			success: false,
			message: 'Your sex is not valid!'
		});
	} else {
		next();
	}
};