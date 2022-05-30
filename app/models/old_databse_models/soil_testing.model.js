const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soil_testing', {
    
    user_id: {
      type: DataTypes.BIGINT,
    },
    location: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.BIGINT,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    sample_id: {
      type: DataTypes.TEXT,
    },
    test_type: {
      type: DataTypes.BIGINT,
    },
    report: {
      type: DataTypes.TEXT,
    }
  }, {
    sequelize,
    tableName: 'soil_testing',
    schema: 'public',
    timestamps: false,
    // indexes: [
    //   {
    //     name: "ix_soil_testing_index",
    //     fields: [
    //       { name: "index" },
    //     ]
    //   },
    // ]
  });
};
