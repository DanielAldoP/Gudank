"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "roles",
      {
        id: {
          autoIncrement: true,
          allowNull: false,
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
        },
        created_at: {
          allowNull: false,
          type: Sequelize.BIGINT.UNSIGNED,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.BIGINT.UNSIGNED,
        },
      },
      {
        timestamps: false
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("roles");
  },
};