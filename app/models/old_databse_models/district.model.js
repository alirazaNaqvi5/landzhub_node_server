const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('district', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    province: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    district: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    tehsil: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'district',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "district_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
