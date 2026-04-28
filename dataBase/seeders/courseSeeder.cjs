module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("courses", [
      //  Computer Science (id: 1)
      {
        course_name: "B.Tech CSE",
        department_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "BCA",
        department_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "MCA",
        department_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Data Science",
        department_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Artificial Intelligence",
        department_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  Mechanical Engineering (id: 2)
      {
        course_name: "B.Tech Mechanical",
        department_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "M.Tech Mechanical",
        department_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Automobile Engineering",
        department_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  Electrical Engineering (id: 3)
      {
        course_name: "B.Tech Electrical",
        department_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Power Systems",
        department_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Renewable Energy",
        department_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  Civil Engineering (id: 4)
      {
        course_name: "B.Tech Civil",
        department_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Structural Engineering",
        department_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Construction Management",
        department_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  Commerce (id: 5)
      {
        course_name: "B.Com",
        department_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "M.Com",
        department_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Banking & Finance",
        department_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  BBA (id: 6)
      {
        course_name: "BBA",
        department_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "MBA",
        department_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "HR Management",
        department_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  Humanities (id: 7)
      {
        course_name: "BA History",
        department_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Sociology",
        department_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Psychology",
        department_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  Management Studies (id: 8)
      {
        course_name: "PGDM",
        department_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Business Analytics",
        department_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  Accounting & Finance (id: 9)
      {
        course_name: "BAF",
        department_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Financial Accounting",
        department_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  PCM (id: 10)
      {
        course_name: "BSc PCM",
        department_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "MSc Physics",
        department_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  Biotechnology (id: 11)
      {
        course_name: "BSc Biotechnology",
        department_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Microbiology",
        department_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //  ECE (id: 12)
      {
        course_name: "B.Tech ECE",
        department_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        course_name: "Embedded Systems",
        department_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("courses", null, {});
  },
};
