const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_sowing_methods_sub', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop_sowing_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    method: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    method_urdu: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crop_sowing_methods_sub',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_sowing_methods_sub_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
