const EpidemiologicalFactor = require('../models').EpidemiologicalFactor;

// Retrieve all EpidemiologicalFactors from the database.
exports.findAll = (req, res) => {
	EpidemiologicalFactor.findAll()
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			res.status(500).json({
				message:
					err.message ||
					'Some error occurred while retrieving EpidemiologicalFactor.'
			});
		});
};

// Find a single EpidemiologicalFactor with an id
exports.findOne = (req, res) => {
	const id = req.params.id;
	EpidemiologicalFactor.findByPk(id)
		.then(data => {
			if (data) {
				res.json(data);
			} else {
				res.status(404).send({
					message: `Cannot find EpidemiologicalFactor with id=${id}.`
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: 'Error retrieving EpidemiologicalFactor with id=' + id
			});
		});
};
