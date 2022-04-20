import models from '@/models';
const HealthDeclarationType = models.HealthDeclarationType;

// Retrieve all HealthDeclarationTypes from the database.
const findAll = async (req, res) => {
	let healthDeclarationTypes;

	try {
		healthDeclarationTypes = HealthDeclarationType.findAll();
	} catch (error) {
		res.status(500).json({
			message:
				err.message ||
				'Some error occurred while retrieving HealthDeclarationType.'
		});
	}

	if (!healthDeclarationTypes) return res.status(404);

	return healthDeclarationTypes;
};

// Find a single HealthDeclarationType with an id
const findOne = async (req, res) => {
	let healthDeclarationType;
	try {
		const id = req.params.id;
		healthDeclarationType = HealthDeclarationType.findByPk(id);
	} catch (error) {
		return res.status(500).send({
			message: 'Error retrieving HealthDeclarationType with id=' + id
		});
	}
	if (!healthDeclarationType) {
		return res.status(404).send({
			message: `Cannot find HealthDeclarationType with id=${id}.`
		});
	}
	return healthDeclarationType;
};

export default {
	findAll,
	findOne
};
