const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_simulation_wheat_phase', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    phases: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    kc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    days: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_simulation_wheat_phase',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_simulation_wheat_phase_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
