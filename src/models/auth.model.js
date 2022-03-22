module.exports = (sequelize, Sequelize) => {
	const Auth = sequelize.define(
		'user_info',
		{
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			username: {
				type: Sequelize.STRING,
				allowNull: false
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			phone_number: {
				type: Sequelize.STRING,
				allowNull: true
			},
			full_name: {
				type: Sequelize.STRING,
				allowNull: true
			},
			date_of_birth: {
				type: Sequelize.STRING,
				allowNull: true
			},
			sex: {
				type: Sequelize.STRING,
				allowNull: true
			},
			national: {
				type: Sequelize.STRING,
				allowNull: true
			},
			province: {
				type: Sequelize.STRING,
				allowNull: true
			},
			district: {
				type: Sequelize.STRING,
				allowNull: true
			},
			ward: {
				type: Sequelize.STRING,
				allowNull: true
			},
			house_number: {
				type: Sequelize.STRING,
				allowNull: true
			},
			id_card_number: {
				type: Sequelize.STRING,
				allowNull: true
			},
			is_active: {
				type: Sequelize.STRING,
				allowNull: true
			}
		},
		{
			tableName: 'user_info'
		}
	);

	return Auth;
};
