const moment = require('moment');
const { DATE_FORMAT } = require('../constants');

const User = require('../models').User;

exports.requestSave = async (req, res) => {
	// validate values.

	// get values from body.
	const phone_number = req.body.phone_number || null;

	const isPhoneNumberValid = true;

	// Check is valid phone number.
	if (phone_number !== null && isPhoneNumberValid) {
		// Create otp_code
		const generate_otp_code = 1412;

		// send otp_code to user's phone.
		// ....generate_otp_code...

		// sending result while all are valid.
		return res.json({
			success: true,
			data: null,
			message: 'Please check OTP code in your phone!'
		});
	} else {
		// sending error while has some error.
		return res
			.status(400)
			.json({ success: false, data: null, message: 'Phone number invalid!' });
	}
};

// Create new UserInfo.
exports.save = async (req, res) => {
	try {
		// find one by phone number
		const userByPhoneNumber = await User.findOne({
			where: { phone_number: req.body.phone_number }
		});

		// get otp and verify code here
		const otp_code = req.body.otp_code;
		const verifyOtpCode = Number(otp_code) === 1412;

		if (verifyOtpCode) {
			// create basic info
			const newUser = {
				phone_number: `${req.body.phone_number}`,
				full_name: req.body.full_name,
				date_of_birth: req.body.date_of_birth,
				sex: req.body.sex,
				employee_code: req.body?.employee_code || '',
				department: req.body?.department || '',
				national: req.body.national,
				province: req.body.province,
				district: req.body.district,
				ward: req.body.ward,
				house_number: req.body.house_number,
				id_card_number: req.body?.id_card_number || ''
			};

			// Just need a user with by phone number.
			if (userByPhoneNumber) {
				// Update user by id here
				const userUpdated = await User.update(newUser, {
					where: { id: userByPhoneNumber.id }
				});

				if (userUpdated) {
					// return result user after update
					return res.json({
						success: true,
						data: newUser,
						message: 'User was updated!'
					});
				} else {
					return res.json({
						success: false,
						data: null,
						message: 'Can not update user'
					});
				}
			}

			// Save UserInfo in the database
			const resultCreateUser = await User.create(newUser);

			if (resultCreateUser) {
				delete resultCreateUser.id;
				return res.json({
					success: true,
					data: resultCreateUser,
					message: 'User info saved!'
				});
			} else {
				return res.status(500).json({
					success: false,
					data: null,
					message: 'Some error occurred while creating the User.'
				});
			}
		} else {
			// return error if OTP invalid.
			return res.json({
				success: false,
				data: null,
				message: 'OTP code invalid!'
			});
		}
	} catch (error) {
		return res.json({
			success: false,
			data: null,
			message: error.message
		});
	}
};

// Find a single UserInfo with an id
exports.currentByPhoneNumber = async (req, res) => {
	const currentUser = await User.findOne({
		where: { phone_number: req.params.phone_number }
	});
	if (currentUser) {
		return res.json({
			success: true,
			data: data,
			message: `Got a user with ${req.params.phone_number}`
		});
	} else {
		return res.status(500).json({
			success: false,
			data: null,
			message: 'Some error occurred while retrieving User.'
		});
	}
};
