const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_cities', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    district_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    commodity_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_cities',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_cities_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
