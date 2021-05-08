module.exports = (sequelize, Sequelize) => {
  const maillogmastermodel = sequelize.define("maillogmaster", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.JSON,
    },
    createddate: {
      type: Sequelize.DATE,
    },
  });

  return maillogmastermodel;
};
