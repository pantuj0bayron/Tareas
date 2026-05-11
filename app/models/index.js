const { dialect } = require('../config/db.config');
const { Pool } = require('../config/db.config');
const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    Pool: { 
        max: dbConfig.Pool.max,
        min: dbConfig.Pool.min,
        acquire: dbConfig.Pool.acquire,
        idle: dbConfig.Pool.idle
        
    }
});
const db = {};
db.Sequelize = sequelize;
db.clientes = require('./alumnos.model.js')(sequelize, Sequelize);
db.productos = require('./encargados.model.js')(sequelize, Sequelize);
db.maestros = require('./maestros.model.js')(sequelize, Sequelize);
module.exports = db;

