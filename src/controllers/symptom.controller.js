import models from '@/models';

const Symptom = models.Symptom;

// Retrieve all Symptoms from the database.
const findAll = async (req, res) => {
	let symptoms;
	try {
		symptoms = await Symptom.findAll();
	} catch (error) {
		return res.status(500).json({
			message: err.message || 'Some error occurred while retrieving Symptom.'
		});
	}

	if (!symptoms) {
		return res.status(404);
	}

	return symptoms;
};

// Find a single Symptom with an id
const findOne = async (req, res) => {
	let symptom;
	try {
		const id = req.params.id;
		symptom = Symptom.findByPk(id);
	} catch (error) {
		return res.status(500).send({
			message: 'Error retrieving Symptom with id=' + id
		});
	}
	if (!symptom) {
		return res.status(404).send({
			message: `Cannot find Symptom with id=${id}.`
		});
	}
	return symptom;
};

export default { findAll, findOne };
