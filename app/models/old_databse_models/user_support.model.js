const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_support', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ticket_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_support',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_user_support_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
