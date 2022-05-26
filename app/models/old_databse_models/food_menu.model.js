const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('food_menu', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    menu_image: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    menu_name: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    price: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'food_menu',
    schema: 'public',
    timestamps: false
  });
};
