const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ph_requirement', {
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
    soil_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lime_requirement: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    target_ph: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ph_requirement',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_ph_requirement_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
