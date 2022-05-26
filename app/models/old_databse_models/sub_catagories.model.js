const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sub_catagories', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    sub_cat_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    crop: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sub_catagories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_sub_catagories_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
