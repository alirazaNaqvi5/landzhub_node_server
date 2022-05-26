const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_disease', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    stage_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    disease_eng: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    disease_urdu: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    cause: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    available_pakistan: {
      type: DataTypes.STRING(500),
      allowNull: true
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
    disease_img: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    added_by: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    edit_by: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    edit_date: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'e_disease',
    schema: 'public',
    timestamps: false
  });
};
