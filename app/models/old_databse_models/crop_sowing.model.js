const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_sowing', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop: {
      type: DataTypes.STRING(100),
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
    tableName: 'crop_sowing',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_sowing_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
