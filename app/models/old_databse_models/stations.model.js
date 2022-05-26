const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stations', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    Latid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Lonid: {
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
    latitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_stations_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
