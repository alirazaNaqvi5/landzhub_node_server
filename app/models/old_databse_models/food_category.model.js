const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_category', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cat_icon: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cat_name: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'food_category',
    schema: 'public',
    timestamps: false
  });
};
