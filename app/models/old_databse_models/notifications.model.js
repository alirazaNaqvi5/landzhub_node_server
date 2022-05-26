const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notifications', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    landid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    notification: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'notifications',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_notifications_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
