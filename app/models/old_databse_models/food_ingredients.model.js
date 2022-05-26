const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_ingredients', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    menu_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    type: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'food_ingredients',
    schema: 'public',
    timestamps: false
  });
};
