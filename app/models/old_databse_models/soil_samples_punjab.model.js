const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soil_samples_punjab', {
    
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    Long: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Lat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pH: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    P: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    K: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SP: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Texture: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PROVINCE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DISTRICT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TEHSIL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    zones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    source_of_irrigation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    N: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    field_capacity: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wilting_point: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    total_available_water: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    readily_available_water: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_moisture_content: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'soil_samples_punjab',
    schema: 'public',
    timestamps: false,
    
  });
};
