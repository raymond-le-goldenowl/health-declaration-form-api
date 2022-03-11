export default (sequelize, Sequelize) => {
	const Symptom = sequelize.define(
		'symptom',
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
			tableName: 'symptom'
		}
	);

	return Symptom;
};
