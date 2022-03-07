export default (sequelize, Sequelize) => {
	const HealthDeclarationType = sequelize.define(
		'health_declaration_type',
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
			tableName: 'health_declaration_type'
		}
	);

	return HealthDeclarationType;
};
