module.exports = (sequelize, Sequelize) => {
  const lands = sequelize.define("lands", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    forsale: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    address: {
      type: Sequelize.STRING,
    },
    geometry: {
      type: Sequelize.STRING,
    },
    area: {
        type: Sequelize.FLOAT,
    },
    user_id: {
        type: Sequelize.INTEGER,
    }
  });

  return lands;
};
