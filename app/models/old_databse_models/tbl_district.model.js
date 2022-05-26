const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_district', {
    index: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id: {
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: true
    },
    district_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_district',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_district_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
