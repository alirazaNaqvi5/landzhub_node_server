const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_land_preparation', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    day: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    step: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    step_urdu: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'crop_land_preparation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_land_preparation_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
