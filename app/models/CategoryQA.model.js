module.exports = (sequelize, Sequelize) => {
    return sequelize.define("faqs", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        cat_id: {
            type: Sequelize.BIGINT,
        },
        question: {
            type: Sequelize.STRING
        },
        answer: {
            type: Sequelize.STRING
        },
        urdu_question: {
            type: Sequelize.STRING
        },
        urdu_answer: {
            type: Sequelize.STRING
        },
        crop: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        datetime: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });
}