export default {
	HOST: 'localhost',
	USER: 'root',
	PORT: '3306',
	PASSWORD: '',
	DB: 'health_declaration_form',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};
