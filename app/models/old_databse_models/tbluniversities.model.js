const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbluniversities', {
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
    sector: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    charteredby: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    discipline: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    province: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbluniversities',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbluniversities_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
