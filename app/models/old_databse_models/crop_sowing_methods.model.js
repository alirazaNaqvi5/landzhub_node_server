const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_sowing_methods', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    method: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    row_distance: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    plant_distance: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    added_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    edit_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    edit_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'crop_sowing_methods',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_sowing_methods_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
