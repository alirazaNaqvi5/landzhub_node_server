const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fooddelivery_food_desc', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ingredients_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    item_amt: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    item_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item_qty: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ItemTotalPrice: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    set_order_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fooddelivery_food_desc',
    schema: 'public',
    timestamps: false
  });
};
