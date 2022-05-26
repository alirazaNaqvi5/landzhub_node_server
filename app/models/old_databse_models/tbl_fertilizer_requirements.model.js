const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_fertilizer_requirements', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    soil_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ph_min: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ph_max: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fertilizer_use: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    crop: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    n: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    p: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    k: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    crop_region: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_fertilizer_requirements',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_fertilizer_requirements_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
