
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("courses", {
     id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    course_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    department_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "departments",
        key: "id",
      },
    },

    is_active: {
      type: Sequelize.SMALLINT,
      defaultValue: 1,
      },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("courses")
  }
};
