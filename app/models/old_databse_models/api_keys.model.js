const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api_keys', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    green_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    level: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    ignore_limits: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    is_private_key: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    ip_addresses: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'api_keys',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_keys_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
