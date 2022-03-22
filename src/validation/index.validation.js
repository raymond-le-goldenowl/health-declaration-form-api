import vnStr from 'vn-str';
import validator from 'validator';

export default (req, res, next) => {
	try {
		const {
			declaration_place,
			place_of_test,
			background_disease,
			symptoms_used_molnupiravir,
			body_temperature,
			blood_oxygen_level,
			disease_symptoms,
			epidemiological_factors,
			other_symptoms,
			user_phone_number,
			declaration_type_id,

			phone_number,
			full_name,
			date_of_birth,
			sex,
			employee_code,
			department,
			national,
			province,
			district,
			ward,
			house_number,
			id_card_number,
			otp_code
		} = req.body;

		if (!validator.default.isJSON(declaration_place)) {
			return res.status(400).json({
				success: false,
				data: null,
				message: 'Invalid declaration place!'
			});
		} else if (!validator.default.isMobilePhone(phone_number, 'vi-VN')) {
			return res.status(400).json({
				success: false,
				data: null,
				message: 'Invalid phone number!'
			});
		} else if (
			!validator.default.isAlpha(
				vnStr.rmVnTones(full_name).trim().toLowerCase()
			)
		) {
			return res.status(400).json({
				success: false,
				data: null,
				message: 'Invalid fullname!'
			});
		} else if (
			!validator.default.isDate(date_of_birth, {
				format: 'DD/MM/YYYY',
				delimiters: ['/', '-']
			})
		) {
			return res.status(400).json({
				success: false,
				data: null,
				message: 'Invalid date of birth!'
			});
		} else if (
			!validator.default.contains(sex, ['Nam', 'Nữ', 'Không', 'nu', 'khong'])
		) {
			return res.status(400).json({
				success: false,
				data: null,
				message: 'Invalid gender!'
			});
		} else if (!validator.default.isJSON(disease_symptoms)) {
			return res.status(400).json({
				success: false,
				data: null,
				message: 'Invalid disease symptoms!'
			});
		} else if (!validator.default.isJSON(epidemiological_factors)) {
			return res.status(400).json({
				success: false,
				data: null,
				message: 'Invalid epidemiological factors!'
			});
		} else {
			next();
		}
	} catch (error) {
		throw error;
	}
};
