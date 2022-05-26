const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_farmer_crops', {
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
    variety: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sowing_date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    operating_cost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    plantation_method: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    yield_unit: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    land_id: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_farmer_crops',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_farmer_crops_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
