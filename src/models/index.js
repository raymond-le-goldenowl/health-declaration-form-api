import { Sequelize } from 'sequelize';
import dbConfig from '@/config/db.config';

import user from './user.model';
import symptom from './symptom.model';
import resultDeclarationModel from './resultDeclaration.model';
import healthDeclarationType from './healthDeclarationType.model';
import epidemiologicalFactorModel from './epidemiologicalFactor.model';

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

// setup models.
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = user(sequelize, Sequelize);
db.Symptom = symptom(sequelize, Sequelize);
db.ResultDeclaration = resultDeclarationModel(sequelize, Sequelize);
db.HealthDeclarationType = healthDeclarationType(sequelize, Sequelize);
db.EpidemiologicalFactor = epidemiologicalFactorModel(sequelize, Sequelize);

export default db;
