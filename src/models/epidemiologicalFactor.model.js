module.exports = (sequelize, Sequelize) => {
	const EpidemiologicalFactor = sequelize.define(
		'epidemiological_factor',
		{
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			content: {
				type: Sequelize.STRING,
				allowNull: true
			}
		},
		{
			tableName: 'epidemiological_factor'
		}
	);

	return EpidemiologicalFactor;
};
