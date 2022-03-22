import models from '@/models';
const HealthDeclarationType = models.HealthDeclarationType;

// Retrieve all HealthDeclarationTypes from the database.
const findAll = (req, res) => {
	HealthDeclarationType.findAll()
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.status(500).json({
				message:
					err.message ||
					'Some error occurred while retrieving HealthDeclarationType.'
			});
		});
};

// Find a single HealthDeclarationType with an id
const findOne = (req, res) => {
	const id = req.params.id;
	HealthDeclarationType.findByPk(id)
		.then(data => {
			if (data) {
				res.json(data);
			} else {
				res.status(404).send({
					message: `Cannot find HealthDeclarationType with id=${id}.`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: 'Error retrieving HealthDeclarationType with id=' + id
			});
		});
};

export default {
	findAll,
	findOne
};
