module.exports = (sequelize, Sequelize) => {
    const promo = sequelize.define("promo", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.SMALLINT,
            allowNull: false
        },
    });
    return promo;
  };