import models from '@/models';

const User = models.User;
const ResultDeclaration = models.ResultDeclaration;

// Create new UserInfo.
const create = async (req, res) => {
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

			// Save UserInfo in the database
			const resultCreateUser = await User.create(newUser);

			// Sau khi thêm người dùng xong thì thêm cả nội dung khai báo nữa.
			if (resultCreateUser) {
				// Create base model to save
				const newResultDeclaration = {
					declaration_place: req.body.declaration_place,
					place_of_test: req.body.place_of_test,
					background_disease: req.body.background_disease,
					symptoms_used_molnupiravir: req.body.symptoms_used_molnupiravir,
					body_temperature: req.body.body_temperature,
					blood_oxygen_level: req.body.blood_oxygen_level,
					disease_symptoms: req.body.disease_symptoms,
					epidemiological_factors: req.body.epidemiological_factors,
					other_symptoms: req.body.other_symptoms,
					user_phone_number: req.body.user_phone_number,
					declaration_type_id: req.body.declaration_type_id
				};

				// Save UserInfo in the database
				const resultCreate = await ResultDeclaration.create(
					newResultDeclaration
				);

				if (resultCreate) {
					return res.json({
						success: true,
						data: resultCreate,
						message: 'Data saved.'
					});
				} else {
					return res.status(500).json({
						success: false,
						message: 'Some error occurred while creating the data.'
					});
				}
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

// Retrieve all UserInfo from the database.
const findAllByUserPhoneNumber = async (req, res) => {
	const allResult = await Auth.findAll({
		where: { user_phone_number: req.params.user_phone_number }
	});
	if (allResult) {
		return res.json({
			success: true,
			data: data,
			message: `All result with user id`
		});
	} else {
		return res.json({
			success: false,
			data: null,
			message: `Not found any result by user id`
		});
	}
};

export default {
	create,
	findAllByUserPhoneNumber
};
