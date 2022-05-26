const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_record', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    land_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    variety_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sowing_method: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    crop: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    srange: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    erange: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    season: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    longitude: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sowing_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crop_record',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_record_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
