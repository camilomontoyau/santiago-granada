'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class character extends Model {
    static associate(models) {

    }
  };
  character.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mass: {
      defaultValue: 1,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hair_color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    planet_name: {
      defaultValue: 'tierra',
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'character',
  });
  return character;
};