"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "config",
      {
        id: {
          autoIncrement: true,
          allowNull: false,
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        key: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
        },
        value: {
          allowNull: false,
          type: Sequelize.TEXT,
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
    await queryInterface.dropTable("config");
  },
};
