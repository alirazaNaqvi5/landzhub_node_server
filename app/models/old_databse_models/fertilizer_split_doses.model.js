const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fertilizer_split_doses', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    stage_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    urea: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    dap: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sop: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    added_by: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    edit_by: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    edit_date: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fertilizer_split_doses',
    schema: 'public',
    timestamps: false
  });
};
