"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "item_prices",
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
        buy_price: {
          allowNull: false,
          type: Sequelize.DOUBLE,
        },
        sell_price: {
          allowNull: false,
          type: Sequelize.DOUBLE,
        },
        profit: {
          allowNull: false,
          type: Sequelize.DOUBLE,
        },
        disc: {
          allowNull: false,
          type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("item_prices");
  },
};
