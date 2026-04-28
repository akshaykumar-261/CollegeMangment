"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashPassword = await bcrypt.hash("SuperAdmin@123", 10);

    await queryInterface.bulkInsert("users", [
      {
        first_name: "Super",
        last_name: "Admin",
        email: "superadmin12@yopemail.com",
        phone_no: "634853252",
        address: "Head Office",
        password: hashPassword,
        otp: null,
        otp_generated_at: null,
        is_active: 1,
        role_id: 1
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", {
      email: "superadmin12@yopemail.com",
    });
  },
};