module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("college_departments", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      college_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "colleges",
          key:"id"
        },
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "departments",
          key:"id"
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }
   )
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.dropTable("college_departments")
  }
};
