const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_rates', {
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
    min: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    max: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fqp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    arrival_quantity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_rates',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_rates_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
