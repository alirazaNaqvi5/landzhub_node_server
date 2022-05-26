const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_varieties_sub', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    varieties_id: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    varieties_eng: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    varieties_urdu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    varities_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    seed_weight: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    seed_source: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    germination: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    maturity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    added_date: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    added_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crop_varieties_sub',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_varieties_sub_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
