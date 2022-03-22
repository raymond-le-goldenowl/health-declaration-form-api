export default (sequelize, Sequelize) => {
	const EpidemiologicalFactor = sequelize.define(
		'epidemiological_factor',
		{
			id: {
				type: Sequelize.UUID,
				allowNull: false,
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
