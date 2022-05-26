const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_crop_images', {
    index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    crop_stage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    crop_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_crop_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ix_tbl_crop_images_index",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
