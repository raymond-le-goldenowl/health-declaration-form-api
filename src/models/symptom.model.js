module.exports = (sequelize, Sequelize) => {
	const Symptom = sequelize.define(
		'symptom',
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
			tableName: 'symptom'
		}
	);

	return Symptom;
};
