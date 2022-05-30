module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("carbon_sequestration", {
        Species : {
            type: Sequelize.STRING
        },
        Botanical_name : {
            type: Sequelize.STRING
        },
        Age : {
            type: Sequelize.INTEGER
        },
        Wood_Density : {
            type: Sequelize.INTEGER
        },
        DBH : {
            type: Sequelize.INTEGER
        },
        Condition_ : {
            type: Sequelize.STRING
        },
        Height : {
            type: Sequelize.INTEGER
        },
        Growth_rate : {
            type: Sequelize.FLOAT
        },
        Maturity_in_Months : {
            type: Sequelize.INTEGER
        },
        Maximum_age_in_years : {
            type: Sequelize.INTEGER
        },
    });
    return Role;
  };