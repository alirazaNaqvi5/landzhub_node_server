const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblSoilSamples', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    sample_no: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    datetime: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_tests: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    test_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sample_location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sample_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblSoilSamples',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tblSoilSamples_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
