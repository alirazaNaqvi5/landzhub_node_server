const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('land_practices', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    practices: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'land_practices',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_land_practices_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
