const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('landlease', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    landid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    lon: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    start: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    q1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    q2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    q3: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    q4: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    q5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    q6: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cnic: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    landtype: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'landlease',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_landlease_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
