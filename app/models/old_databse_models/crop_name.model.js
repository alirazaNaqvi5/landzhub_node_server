const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_name', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    added_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    added_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    edit_date: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    edit_by: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'crop_name',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_name_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
