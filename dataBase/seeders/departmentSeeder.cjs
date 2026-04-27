module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("departments", [
      {
        dept_name: "Computer Science",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dept_name: "Mechanical Engineering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dept_name: "Electrical Engineering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dept_name: "Civil Engineering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dept_name: "Commerce",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dept_name: "Business Administration (BBA)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dept_name: "Humanities",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dept_name: "Management Studies",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dept_name: "Accounting & Finance",
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
        dept_name: "Physics,Chemistry,Mathematics",
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        dept_name: "Biotechnology,Biology",
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        dept_name: "Electronics & Communication (ECE)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete("departments", null, {});
    }
};
