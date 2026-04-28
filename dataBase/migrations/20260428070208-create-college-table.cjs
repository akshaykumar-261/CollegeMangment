module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("colleges", {
     id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true,
         },
         college_Name: {
           type: Sequelize.STRING,
           alloNull: true,
         },
         college_Email: {
           type: Sequelize.STRING,
           alloNull: true,
         },
         college_Phone_No: {
           type: Sequelize.INTEGER(10),
           alloNull: true,
         },
         location: {
           type: Sequelize.STRING,
           alloNull: true,
         },
         establishedYear: {
           type: Sequelize.STRING,
           alloNull: true,
         },
         user_Id: {
           // for giving principle to college
           type: Sequelize.INTEGER,
           alloNull: false,
           references: {
             model: "users",
             key: "id",
           },
         },
         is_active: {
           type: Sequelize.SMALLINT,
           allowNull: true,
           defaultValue: 1, // active: 1 , Incative: 0
         },
   })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable("colleges")
  }
};
