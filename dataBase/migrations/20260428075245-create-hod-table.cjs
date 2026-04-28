module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hods", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      college_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "colleges",
          key: "id",
        },
      },
      department_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "departments",
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
    await queryInterface.dropTable("hods");
  },
};
