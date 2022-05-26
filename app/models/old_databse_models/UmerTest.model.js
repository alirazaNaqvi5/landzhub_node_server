const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UmerTest', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Age: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Designation: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UmerTest',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_UmerTest_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
