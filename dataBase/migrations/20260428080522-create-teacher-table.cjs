module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("teachers", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      subject: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      hod_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "hods",
          key: "id",
        },
      },
      is_active: {
        type: Sequelize.SMALLINT,
        allowNull: true,
        defaultValue: 1, // active: 1 , Incative: 0
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("teachers");
  },
};
