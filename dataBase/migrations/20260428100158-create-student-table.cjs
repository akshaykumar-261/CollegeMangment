
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("students", {
      
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          roll_No: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
          },
          first_name: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          last_name: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          email: {
            type: Sequelize.STRING(100),
            allowNull: true,
          },
          phone_no: {
            type: Sequelize.INTEGER(10),
            allowNull: true,
          },
          address: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          course_Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "courses",
              key: "id",
            },
          },
          teacher_Id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: "teachers",
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
   await queryInterface.dropTable("students")
  }
};
