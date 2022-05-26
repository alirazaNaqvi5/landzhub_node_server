module.exports = {
    HOST: "192.168.100.17",
    USER: "postgres",
    PASSWORD: "greenage",
    DB: "dataofmysql",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };


  // module.exports = {
  //   HOST: "localhost",
  //   USER: "postgres",
  //   PASSWORD: "agronomics",
  //   DB: "postgres",
  //   dialect: "postgres",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000
  //   }
  // };