const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle
	}
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Symptom = require('./symptom.model')(sequelize, Sequelize);
db.Auth = require('./auth.model')(sequelize, Sequelize);

db.HealthDeclarationType = require('./healthDeclarationType.model')(
	sequelize,
	Sequelize
);
// setup models.

module.exports = db;
