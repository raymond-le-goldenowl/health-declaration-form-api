import models from '@/models';
import { generateAccessToken } from '@/helpers/jwt.helpers';

const User = models.User;

const requestSave = async (req, res) => {
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
const save = async (req, res) => {
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
const userById = async (req, res) => {
	try {
		const user_id = req.params.id;
		const user = await User.findOne({
			where: { id: user_id }
		});
		if (user) {
			return res.json({
				success: true,
				data: user,
				message: `Got a user with ${user_id}`
			});
		} else {
			return res.status(500).json({
				success: false,
				data: null,
				message: 'Some error occurred while retrieving User.'
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

const getAllUsersByPhoneNumber = async (req, res) => {
	try {
		const { phone_number } = req.body;

		const resultGetAllUsers = await User.findAll({
			where: { phone_number }
		});

		if (resultGetAllUsers) {
			return res.json({
				success: true,
				data: resultGetAllUsers,
				message: `Get all users successfully!`
			});
		} else {
			return res.status(500).json({
				success: false,
				data: null,
				message: 'Some error occurred while retrieving User.'
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

const auth = async (req, res) => {
	try {
		// get body values from request
		const { phone_number, otp_code } = req.body;

		// check OTP code here
		const isOTPByPhoneNumberValid = otp_code && true;

		// phone number valid will return accessToken, invalid will return error.
		if (isOTPByPhoneNumberValid) {
			const payload = { phone_number: phone_number };
			const accessToken = generateAccessToken(payload);

			return res.json({
				success: true,
				data: accessToken,
				message: `Get access token successfully!`
			});
		} else {
			return res.status(500).json({
				success: false,
				data: null,
				message: 'Invalid phone number!'
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

const requestSendOTPToUser = async (req, res) => {
	try {
		// get body values from request
		const { phone_number } = req.body;
		const findUserByPhoneNumber = await User.findOne({
			where: { phone_number: phone_number }
		});
		if (findUserByPhoneNumber) {
			return res.json({
				success: true,
				data: null,
				message: `Please check your phone!`
			});
		} else {
			return res.status(500).json({
				success: false,
				data: null,
				message: 'Invalid phone number!'
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

const userByPhoneNumber = async (req, res) => {
	try {
		// get body values from request
		const { phone_number } = req.body;
		const findUserByPhoneNumber = await User.findOne({
			where: { phone_number: phone_number }
		});
		if (findUserByPhoneNumber) {
			return res.json({
				success: true,
				data: findUserByPhoneNumber,
				message: `Get one user by phone number!`
			});
		} else {
			return res.status(500).json({
				success: false,
				data: null,
				message: 'Invalid phone number!'
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

export default {
	requestSave,
	save,
	userById,
	getAllUsersByPhoneNumber,
	auth,
	requestSendOTPToUser,
	userByPhoneNumber
};
