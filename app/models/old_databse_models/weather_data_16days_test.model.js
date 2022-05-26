const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('weather_data_16days_test', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    latitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    min_temp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    max_temp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    humidity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wind_speed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sunshine_hours: {
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
    }
  }, {
    sequelize,
    tableName: 'weather_data_16days_test',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_weather_data_16days_test_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
