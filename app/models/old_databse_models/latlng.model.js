const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('latlng', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    lat_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    lng_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    province: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    district: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tehsil: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'latlng',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_latlng_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
