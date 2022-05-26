const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diseases', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    causal_organism: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    in_a_nutshell: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    symptoms: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    development: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    biological_control: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    chemical_control: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    preventive_measures: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'diseases',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "diseases_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
