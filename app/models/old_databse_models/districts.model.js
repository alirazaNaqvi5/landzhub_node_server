const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('districts', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    district: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    division_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    province_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'districts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "districts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
