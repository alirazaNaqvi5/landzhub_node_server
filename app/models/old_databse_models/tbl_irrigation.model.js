const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_irrigation', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    crop_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_irrigation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    irrigation_days: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_days: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_irrigation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_irrigation_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
