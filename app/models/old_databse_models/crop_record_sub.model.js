const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_record_sub', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop_record_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    crop_land_preparation_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    updated_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crop_record_sub',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_record_sub_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
