const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_varieties', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    crop_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    district: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    source_of_irrigation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    added_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    added_by: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    varieties: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'crop_varieties',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "crop_varieties_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
