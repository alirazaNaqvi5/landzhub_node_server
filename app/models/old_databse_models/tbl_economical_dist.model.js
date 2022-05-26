const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_economical_dist', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    district: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    area: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    production: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    year: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    crop: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_economical_dist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_economical_dist_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
