const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api_logs', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    uri: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    api_key: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rtime: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    authorized: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    response_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'api_logs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "api_logs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
