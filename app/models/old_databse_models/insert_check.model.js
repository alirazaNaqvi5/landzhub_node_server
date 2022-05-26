const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('insert_check', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    check: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'insert_check',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_insert_check_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
