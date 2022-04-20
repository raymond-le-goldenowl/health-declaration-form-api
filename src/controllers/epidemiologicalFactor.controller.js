import models from '@/models';

const EpidemiologicalFactor = models.EpidemiologicalFactor;

// Retrieve all EpidemiologicalFactors from the database.
const findAll = async (req, res) => {
	let epidemiologicalFactors;
	try {
		epidemiologicalFactors = await EpidemiologicalFactor.findAll();
	} catch (error) {
		return res.status(500).json({
			message:
				err.message ||
				'Some error occurred while retrieving EpidemiologicalFactor.'
		});
	}
	if (!epidemiologicalFactors) {
		return res.status(404);
	}
	return epidemiologicalFactors;
};

// Find a single EpidemiologicalFactor with an id
const findOne = async (req, res) => {
	let epidemiologicalFactor;
	try {
		const id = req.params.id;
		epidemiologicalFactor = await EpidemiologicalFactor.findByPk(id);
	} catch (error) {
		return res.status(500).send({
			message: 'Error retrieving EpidemiologicalFactor with id=' + id
		});
	}
	if (epidemiologicalFactor) {
		return res.status(404).send({
			message: `Cannot find EpidemiologicalFactor with id=${id}.`
		});
	}

	return epidemiologicalFactor;
};

export default {
	findAll,
	findOne
};
