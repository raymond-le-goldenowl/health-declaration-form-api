const Symptom = require('../models').Symptom;
const Op = require('../models').Sequelize.Op;

// Retrieve all Symptoms from the database.
exports.findAll = (req, res) => {
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
exports.findOne = (req, res) => {
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
