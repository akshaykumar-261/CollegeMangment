module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("roles", [
      {
        role_name: "Super Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_name: "Principal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
         {
        role_name: "HOD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
            {
        role_name: "Teacher",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};