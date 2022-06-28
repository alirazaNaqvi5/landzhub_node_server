module.exports = (sequelize, Sequelize) => {
    return sequelize.define("Category", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
            type: Sequelize.STRING
        },
        category_urdu: {
            type: Sequelize.STRING
        },
        crop: {
            type: Sequelize.STRING
        },
        datetime: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });
}