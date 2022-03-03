module.exports = (sequelize, Sequelize) => {
	const ResultDeclaration = sequelize.define(
		'result_declaration',
		{
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			declaration_place: {
				type: Sequelize.STRING,
				allowNull: true
			},

			// dành cho mẫu 4 và 5.
			place_of_test: {
				type: Sequelize.STRING,
				allowNull: true
			},

			// dành cho mẫu 5.
			background_disease: {
				type: Sequelize.STRING,
				allowNull: true
			},
			symptoms_used_molnupiravir: {
				type: Sequelize.STRING,
				allowNull: true
			},

			body_temperature: {
				type: Sequelize.STRING,
				allowNull: true
			},
			blood_oxygen_level: {
				type: Sequelize.STRING,
				allowNull: true
			},

			disease_symptoms: {
				type: Sequelize.STRING,
				allowNull: false
			},
			epidemiological_factors: {
				type: Sequelize.STRING,
				allowNull: false
			},
			other_symptoms: {
				type: Sequelize.STRING
			},

			user_phone_number: {
				type: Sequelize.STRING(15),
				allowNull: false
			},
			declaration_type_id: {
				type: Sequelize.INTEGER,
				allowNull: false
			}
		},
		{ tableName: 'result_declaration' }
	);

	return ResultDeclaration;
};
