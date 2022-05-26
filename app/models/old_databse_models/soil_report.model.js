const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soil_report', {
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
    test_type: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    testing_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    report: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'soil_report',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_soil_report_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
