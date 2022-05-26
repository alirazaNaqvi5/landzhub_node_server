const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crop_nutrients', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nitrogen: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    potash: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    phosphorus: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    zinc: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    boron: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    sulphur: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    norm_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crop_nutrients',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "crop_nutrients_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
