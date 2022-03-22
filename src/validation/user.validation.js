import vnStr from 'vn-str';
import validator from 'validator';

const requestSaveValidate = (req, res, next) => {
	if (!validator.default.isMobilePhone(req.body?.phone_number, 'vi-VN')) {
		return res.json({
			success: false,
			message: 'Your phone number is not valid!'
		});
	} else {
		next();
	}
};

const saveValidate = (req, res, next) => {
	if (!validator.default.isMobilePhone(req.body?.phone_number, 'vi-VN')) {
		return res.json({
			success: false,
			message: 'Your phone number is not valid!'
		});
	} else if (
		!validator.default.isAlpha(
			vnStr.rmVnTones(req.body?.full_name || '').replaceAll(' ', '')
		)
	) {
		return res.json({
			success: false,
			message: 'Your full name is not valid!'
		});
	} else if (
		!validator.default.isAlpha(req.body?.sex) &&
		!validator.default.contains(req.body?.sex)
	) {
		return res.json({
			success: false,
			message: 'Your sex is not valid!'
		});
	} else if (!validator.default.isJSON(req.body?.national)) {
		return res.json({
			success: false,
			message: 'Your national is not valid!'
		});
	} else if (!validator.default.isJSON(req.body?.province)) {
		return res.json({
			success: false,
			message: 'Your province is not valid!'
		});
	} else if (!validator.default.isJSON(req.body?.district)) {
		return res.json({
			success: false,
			message: 'Your district is not valid!'
		});
	} else if (!validator.default.isJSON(req.body?.ward)) {
		return res.json({
			success: false,
			message: 'Your ward is not valid!'
		});
	} else if (validator.default.isEmpty(req.body?.house_number)) {
		return res.json({
			success: false,
			message: 'Your house number is not valid!'
		});
	} else {
		next();
	}
};

const currentByPhoneNumberValidate = (req, res, next) => {
	if (!validator.default.isMobilePhone(req.body?.phone_number, 'vi-VN')) {
		return res.json({
			success: false,
			message: 'Your phone number is not valid!'
		});
	} else {
		next();
	}
};

export default {
	saveValidate,
	requestSaveValidate,
	currentByPhoneNumberValidate
};
