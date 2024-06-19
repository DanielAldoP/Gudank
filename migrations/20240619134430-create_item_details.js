"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "item_details",
      {
        id: {
          autoIncrement: true,
          allowNull: false,
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        item_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          unique: true
        },
        image: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        description: {
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
    await queryInterface.dropTable("item_details");
  },
};
