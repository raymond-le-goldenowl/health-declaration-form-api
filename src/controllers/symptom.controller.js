import models from '@/models';

const Symptom = models.Symptom;

// Retrieve all Symptoms from the database.
const findAll = (req, res) => {
	Symptom.findAll()
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.status(500).json({
				message: err.message || 'Some error occurred while retrieving Symptom.'
			});
		});
};

// Find a single Symptom with an id
const findOne = (req, res) => {
	const id = req.params.id;
	Symptom.findByPk(id)
		.then(data => {
			if (data) {
				res.json(data);
			} else {
				res.status(404).send({
					message: `Cannot find Symptom with id=${id}.`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: 'Error retrieving Symptom with id=' + id
			});
		});
};

export default { findAll, findOne };
