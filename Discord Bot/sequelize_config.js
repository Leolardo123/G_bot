const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const sequelize = new Sequelize({
	// SQLite only
	storage: './Database/database.sqlite',
});

module.exports = {
    sequelize:sequelize
}