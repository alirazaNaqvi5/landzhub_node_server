const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soil_testing', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sample_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    test_type: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    report: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'soil_testing',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_soil_testing_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
