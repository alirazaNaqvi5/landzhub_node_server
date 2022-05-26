const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblAverageProduction', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    crop: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    year: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    punjab: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sindh: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kpk: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    balochistan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pakistan: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblAverageProduction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tblAverageProduction_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
