'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  personagem.init({
    username: DataTypes.STRING,
    nome: DataTypes.STRING,
    descrição: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personagem',
  });
  return personagem;
};