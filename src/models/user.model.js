module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define(
		'user_info',
		{
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			phone_number: {
				type: Sequelize.STRING
			},
			full_name: {
				type: Sequelize.STRING
			},
			date_of_birth: {
				type: Sequelize.STRING
			},
			sex: {
				type: Sequelize.STRING
			},

			// dành cho loại 1.
			employee_code: {
				type: Sequelize.STRING
			},
			department: {
				type: Sequelize.STRING
			},

			national: {
				type: Sequelize.STRING
			},
			province: {
				type: Sequelize.STRING
			},
			district: {
				type: Sequelize.STRING
			},
			ward: {
				type: Sequelize.STRING
			},
			house_number: {
				type: Sequelize.STRING
			},

			// dành cho loại 3, 4, 5
			id_card_number: {
				type: Sequelize.STRING
			}
		},
		{
			tableName: 'user_info'
		}
	);

	return User;
};
