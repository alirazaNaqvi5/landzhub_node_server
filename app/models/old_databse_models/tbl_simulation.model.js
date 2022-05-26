const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_simulation', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    stages: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    days: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    crop_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_simulation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_simulation_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
