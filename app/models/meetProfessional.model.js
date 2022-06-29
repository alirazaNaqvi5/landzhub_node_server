module.exports = (sequelize, Sequelize) => {
    return sequelize.define("meetProfessional", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        phoneNumber: {
            type: Sequelize.BIGINT
        },
        email: {
            type: Sequelize.STRING
        },
        specialization: {
            type: Sequelize.STRING
        },
        designation: {
            type: Sequelize.STRING
        },
    });
}