const ResultDeclaration = require('../models').ResultDeclaration;

// Create new UserInfo.
exports.create = (req, res) => {
	// validate data

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
		user_id: req.body.user_id,
		declaration_type_id: req.body.declaration_type_id
	};

	// Save UserInfo in the database
	const resultCreate = ResultDeclaration.create(newResultDeclaration);

	if (resultCreate) {
		return res.json({ success: true, data: data, message: 'Data saved.' });
	} else {
		return res.status(500).send({
			success: false,
			message: err.message || 'Some error occurred while creating the data.'
		});
	}
};

// Retrieve all UserInfo from the database.
exports.findAllByUserId = async (req, res) => {
	const allResult = await Auth.findAll({
		where: { user_id: req.params.userId }
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
