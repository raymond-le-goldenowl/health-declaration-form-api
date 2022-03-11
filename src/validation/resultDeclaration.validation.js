var validator = require('validator');
const vnStr = require('vn-str');

const findAllByUserPhoneNumberValidate = (req, res, next) => {
	if (!validator.default.isMobilePhone(req.body?.phone_number, 'vi-VN')) {
		return res.json({
			success: false,
			message: 'Your phone number is not valid!'
		});
	} else {
		next();
	}
};

const createValidate = (req, res, next) => {
	if (!validator.default.isMobilePhone(req.body?.phone_number, 'vi-VN')) {
		return res.json({
			success: false,
			message: 'Your phone number is not valid!'
		});
	} else if (!validator.default.isJSON(req.body?.declaration_place || '')) {
		return res.json({
			success: false,
			message: 'Your declaration place is not valid!'
		});
	} else if (!validator.default.isJSON(req.body?.disease_symptoms)) {
		return res.json({
			success: false,
			message: 'Your disease symptoms is not valid!'
		});
	} else if (!validator.default.isJSON(req.body?.epidemiological_factors)) {
		return res.json({
			success: false,
			message: 'Your epidemiological factors is not valid!'
		});
	} else if (!validator.default.isUUID(req.body?.declaration_type_id)) {
		return res.json({
			success: false,
			message: 'Your declaration type id is not valid!'
		});
	} else {
		next();
	}
};

export default {
	createValidate,
	findAllByUserPhoneNumberValidate
};
