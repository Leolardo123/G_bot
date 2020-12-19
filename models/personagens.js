'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personagens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Personagens.init({
    usuario: DataTypes.STRING,
    personagem: DataTypes.STRING,
    descrição: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personagens',
  });
  return Personagens;
};