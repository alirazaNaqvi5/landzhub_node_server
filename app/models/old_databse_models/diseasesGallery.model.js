const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diseasesGallery', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    disease_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'diseasesGallery',
    schema: 'public',
    timestamps: false
  });
};
