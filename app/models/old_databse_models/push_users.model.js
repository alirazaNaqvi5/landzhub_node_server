const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('push_users', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    android_token: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'push_users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_push_users_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
