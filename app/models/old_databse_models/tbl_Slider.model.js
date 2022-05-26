const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_Slider', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_Slider',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_Slider_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
