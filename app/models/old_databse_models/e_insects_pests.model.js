const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_insects_pests', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    stage_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    insects_pest_eng: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    insects_pest_urdu: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    cause: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    symptoms: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    prevention: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    symptoms_urdu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prevention_urdu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    insects_pest_img: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    available_pakistan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    added_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    edit_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    edit_date: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_insects_pests',
    schema: 'public',
    timestamps: false
  });
};
