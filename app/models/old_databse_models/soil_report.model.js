const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soil_report', {
   
    user_id: {
      type: DataTypes.BIGINT,
    },
    test_type: {
      type: DataTypes.BIGINT,
    },
    testing_id: {
      type: DataTypes.TEXT,
    },
    report: {
      type: DataTypes.TEXT,
    },
    date: {
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    tableName: 'soil_report',
    schema: 'public',
    timestamps: false,
    // indexes: [
    //   {
    //     name: "ix_soil_report_index",
    //     fields: [
    //       { name: "index" },
    //     ]
    //   },
    // ]
  });
};
